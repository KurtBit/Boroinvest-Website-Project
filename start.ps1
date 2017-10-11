Set-Variable NODE_PATH=dev

Set-Location "./client";
    
Start-Process `
    -FilePath ng `
    -ArgumentList "serve" `
    -PassThru `

Set-Location "../server";

Start-Process `
    -FilePath node `
    -ArgumentList "Index.js" `
    -PassThru `

Set-Location "../";