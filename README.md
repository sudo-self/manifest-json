
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
### deep link

```
<activity
    android:name=".MyMapActivity"
    android:exported="true"
    ...>
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="geo" />
    </intent-filter>
</activity>

```
### Generate fingerprint 

```
keytool -list -v -keystore my-release-key.keystore
```
### SHA-256 in assetlinks.json
 ***https://www.example.com/.well-known/assetlinks.json***
```

[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target" : { "namespace": "android_app", "package_name": "com.example.app",
               "sha256_cert_fingerprints": ["hash_of_app_certificate"] }
}]
```

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

