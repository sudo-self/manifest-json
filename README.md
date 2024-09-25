
### PWA

```bubblewrap init --manifest https://sudo-self.github.io/manifest-json/manifest.json```

### manifest.json

```
{
  "short_name": "JSON",
  "name": "manifest.json",
  "start_url": "https://sudo-self.github.io/manifest-json",
  "icons": [

    {
      "src": "icon192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable"
    },

    {
      "src": "icon512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any maskable"
    }
  ],

  "theme_color": "#f0f0f0",
  "background_color": "#f0f0f0"
}

```
### build apk then fingerprint

```
keytool -list -v -keystore my-release-key.keystore
```

<img width="962" alt="Screenshot 2024-09-25 at 6 54 10 AM" src="https://github.com/user-attachments/assets/54b441e0-6a83-4224-8c8f-74f8c8ffb2ae">

## example

```
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target" : { "namespace": "android_app", "package_name": "com.example.app",
               "sha256_cert_fingerprints": ["hash_of_app_certificate"] }
}]
```

<img width="948" alt="Screenshot 2024-09-25 at 7 01 51 AM" src="https://github.com/user-attachments/assets/e83fe2ec-fe4c-4a0a-9d51-5a736f11c654">

### Note the `.` wellknown/
 
### Test&:nbsp;h<a href="https://sudo-self.github.io/manifest-json/.well-known/assetlinks.json">sudo-self.github.io/manifest-json/.well-known/assetlinks.json</a><br>

<img width="1195" alt="Screenshot 2024-09-25 at 7 29 29 AM" src="https://github.com/user-attachments/assets/9e233867-a60f-4c0c-8fab-bca7347f68ab">

## Web Links

```
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data android:scheme="http" />
    <data android:host="myownpersonaldomain.com" />
</intent-filter>

```

