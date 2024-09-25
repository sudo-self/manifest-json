
### <a href="https://sudo-self.github.io/manifest-json/">manifest.json</a>&nbsp;generator

<img width="1433" alt="Screenshot 2024-09-25 at 9 26 24 AM" src="https://github.com/user-attachments/assets/82fd78d4-20ea-401f-ba1f-d516322dc9c8">


```
bubblewrap init --manifest https://sudo-self.github.io/manifest-json/manifest.json
```
### build apk then fingerprint

```
keytool -list -v -keystore my-release-key.keystore
```

<img width="962" alt="Screenshot 2024-09-25 at 6 54 10 AM" src="https://github.com/user-attachments/assets/54b441e0-6a83-4224-8c8f-74f8c8ffb2ae">

### Googles Asset Links Tool
### <a href="https://developers.google.com/digital-asset-links/tools/generator">Google Asset Links Generator</a>

<img width="948" alt="Screenshot 2024-09-25 at 7 01 51 AM" src="https://github.com/user-attachments/assets/e83fe2ec-fe4c-4a0a-9d51-5a736f11c654">

### Note the `.` wellknown/
 
### Test: &nbsp;<a href="https://sudo-self.github.io/manifest-json/.well-known/assetlinks.json">sudo-self.github.io/manifest-json/.well-known/assetlinks.json</a><br>

***Any response from the server besides HTTP 200 is treated as an error***

<img width="1195" alt="Screenshot 2024-09-25 at 7 29 29 AM" src="https://github.com/user-attachments/assets/9e233867-a60f-4c0c-8fab-bca7347f68ab">

### match a target

```
"target": {
  "namespace": "web",
  "site": "https://sudo-self.github.io/"
}
```

