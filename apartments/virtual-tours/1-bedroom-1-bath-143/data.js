var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining-room",
      "name": "dining room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5683871531978681,
        "pitch": 0.4899458812165438,
        "fov": 1.4299837741793386
      },
      "linkHotspots": [
        {
          "yaw": -1.5683871531978681,
          "pitch": 0.4899458812165438,
          "rotation": 0,
          "target": "5-living-room"
        },
        {
          "yaw": -2.4125107543928,
          "pitch": 0.4592155298419307,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": -0.2836936796821483,
          "pitch": 0.6439137017387377,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.696465505099134,
        "pitch": 0.369213890669398,
        "fov": 1.4299837741793386
      },
      "linkHotspots": [
        {
          "yaw": -2.5524272227606275,
          "pitch": 0.4788437457596917,
          "rotation": 0,
          "target": "5-living-room"
        },
        {
          "yaw": 2.7780006097308974,
          "pitch": 0.6480607819709547,
          "rotation": 0,
          "target": "0-dining-room"
        },
        {
          "yaw": -0.1282832313525457,
          "pitch": 0.4241631821280105,
          "rotation": 0,
          "target": "4-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-patio",
      "name": "patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.8983542783857654,
        "pitch": 0.2638205358780006,
        "fov": 1.4299837741793386
      },
      "linkHotspots": [
        {
          "yaw": 0.572408562599751,
          "pitch": 0.5536554973819285,
          "rotation": 0,
          "target": "5-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1972936087193009,
        "pitch": 0.3783557747405979,
        "fov": 1.4299837741793386
      },
      "linkHotspots": [
        {
          "yaw": -0.5525885984905674,
          "pitch": 0.3609702859017254,
          "rotation": 0,
          "target": "0-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-laundry",
      "name": "laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6534361134780706,
        "pitch": 0.5996664104038096,
        "fov": 1.4299837741793386
      },
      "linkHotspots": [
        {
          "yaw": 1.6719272054437013,
          "pitch": 0.5850476850954109,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.2057216452891133,
        "pitch": 0.6224972760391658,
        "fov": 1.4299837741793386
      },
      "linkHotspots": [
        {
          "yaw": 2.1769037114875704,
          "pitch": 0.5624256987643772,
          "rotation": 0,
          "target": "0-dining-room"
        },
        {
          "yaw": -1.5774204100170408,
          "pitch": 0.3440828824741491,
          "rotation": 0,
          "target": "2-patio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1 bedroom 1 bath",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
