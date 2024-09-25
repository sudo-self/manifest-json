
### <a href="https://make-manifest-json.vercel.app">manifest.json</a>&nbsp;generator

<img width="1440" alt="Screenshot 2024-09-25 at 9 50 41 AM" src="https://github.com/user-attachments/assets/f628421f-3c2d-499a-848d-e59f5940b9bc">


### PWA wrap

```
bubblewrap init --manifest https://sudo-self.github.io/manifest-json/manifest.json
```

### Extract SHA-256
```
keytool -list -v -keystore my-release-key.keystore
```

<img width="962" alt="Screenshot 2024-09-25 at 6 54 10 AM" src="https://github.com/user-attachments/assets/54b441e0-6a83-4224-8c8f-74f8c8ffb2ae">

### Asset Links Tool
### <a href="https://developers.google.com/digital-asset-links/tools/generator">Google's Generator</a>

<img width="948" alt="Screenshot 2024-09-25 at 7 01 51 AM" src="https://github.com/user-attachments/assets/e83fe2ec-fe4c-4a0a-9d51-5a736f11c654">

### Note the `.` wellknown/
 
#### Verify .json:&nbsp;<a href="https://sudo-self.github.io/manifest-json/.well-known/assetlinks.json">sudo-self.github.io/manifest-json/.well-known/assetlinks.json</a><br>

<img width="1195" alt="Screenshot 2024-09-25 at 7 29 29 AM" src="https://github.com/user-attachments/assets/9e233867-a60f-4c0c-8fab-bca7347f68ab">


### Match a Target

```
"target": {
  "namespace": "web",
  "site": "https://sudo-self.github.io/"
}
```
***Any response from the server besides HTTP 200 is treated as an error***
