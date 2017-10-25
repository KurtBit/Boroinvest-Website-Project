module.exports = (mongoose) => {
    const Schema = mongoose.Schema;

    var offerSchema = new Schema({
        name: String,
        img: String,
        content: String,
        date: Date,
        price: Number
    });

    var userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        created_at: Date
    });

    return {
        compile: () => {
            return {
                users: mongoose.model('Users', userSchema),
                offers: mongoose.model('Offers', offerSchema)
            }
        }
    };
}