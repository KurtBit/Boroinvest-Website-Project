/**
 * This library extends the swagger functionality, adding
 * support for Faker.js attributes in the swagger spec file,
 * by default it is the swagger.yaml file.
 * Also adds support for generating the fake values dynamically
 * on each request.
 *
 * Current Fake data provider: 
 *  Faker.js -> https://github.com/Marak/faker.js/wiki
 * 
 * Example attributes [swagger.xaml]
 * 
 *   applicationStateId:
 *      type: "number"
 *      x-faker: "faker.random.number"
 *    firstName:
 *      type: "string"
 *      x-faker: "faker.name.firstName"
 * 
 * Requires initial configuration in index.js to be able
 * to intercept the responce before it is send to the receiver.
 * 
 * Example configuration [index.js]
 * 
 *   app.use((req, res, next) => {
 *      justFake.intercept(req);
 * 
 *      return middleware.swaggerRouter(options)(req, res, next);
 *   });
 */
const FAKE_DATA_PROVIDER = 'faker';

const faker = require(FAKE_DATA_PROVIDER);

const parse = (statement) => {
    if (statement.toLowerCase().match('fk')) {
        return eval(statement.replace('fk', FAKE_DATA_PROVIDER));
    }

    return eval(statement);
}

const isObject = (obj) => {
    return obj === Object(obj);
}

const isHtml = (text) => {
    return Boolean(text.match(/<.*>/g));
}

const justFake = (req, data) => {
    if (!req || !data || isHtml(data) ||
        req.originalUrl.toLowerCase().includes("docs")) {
        return data;
    }

    const JSON_INDENTATION = 4;

    let template;
    let model;

    let schema = req.swagger.operation.responses['200'].schema;

    if (schema.items) {
        model = JSON.parse(data)[0];
        template = schema.items.properties;
    } else {
        template = schema.properties;
        model = JSON.parse(data);
    }

    let modelStack = [];
    let templateStack = [];

    modelStack.push(model);
    templateStack.push(template);

    try {
        while (modelStack.length !== 0) {

            let modelItems = modelStack.pop();
            let templateItems = templateStack.pop();

            for (let item in modelItems) {

                if (!isNaN(item)) {
                    let tmp = modelItems[item];

                    if (isObject(tmp)) {
                        modelStack.push(tmp);
                        templateStack.push(templateItems);

                        continue;
                    }
                }

                let modelValue = modelItems[item];
                let templateValue = templateItems[item] || templateItems;

                if (isObject(modelValue)) {

                    modelStack.push(modelValue);

                    if (Array.isArray(modelValue)) {
                        if (templateValue['items']['properties']) {
                            templateStack.push(templateValue['items']['properties']);
                        } else {
                            templateStack.push(templateValue['items']);
                        }
                    } else {
                        templateStack.push(templateValue['properties']);
                    }
                } else if (templateValue['x-faker']) {
                    modelItems[item] = parse(templateValue['x-faker']);
                }
            }
        }
    } catch (error) {
        console.log(error.message);
    }

    const getRandomArbitrary = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // TODO(Add proper support for multiple return values, array)
    // Hackfix
    if (schema.items) {
        const MAX_ELEMENTS = 10;
        const MIN_ELEMENTS = 1;

        let itemsCount = getRandomArbitrary(MIN_ELEMENTS, MAX_ELEMENTS);

        let items = new Array(itemsCount);

        items.fill(model);

        model = items;
    }

    return JSON.stringify(model, null, JSON_INDENTATION);
}

module.exports = (http) => {
    let request;

    (function (end) {
        http.OutgoingMessage.prototype.end = function (data, encoding, callback) {
            end.call(this, justFake(request, data), encoding, callback);
        };
    }(http.OutgoingMessage.prototype.end));

    return {
        intercept: (req) => {
            request = req

            return (func) => func;
        }
    }
};
