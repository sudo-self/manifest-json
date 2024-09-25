
## build apk

```bubblewrap init --manifest https://sudo-self.github.io/manifest-json/manifest.json```



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
## Assetlinks.json
***http://example.digitalassetlinks.org/.well-known/assetlinks.json***

```
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "web",
    "site": "https://www.google.com"
  }
},{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "org.digitalassetlinks.sampleapp",
    "sha256_cert_fingerprints": ["10:39:38:EE:45:37:E5:9E:8E:E7:92:F6:54:50:4F:B8:34:6F:C6:B3:46:D0:BB:C4:41:5F:C3:39:FC:FC:8E:C1"]
  }
}]

```

