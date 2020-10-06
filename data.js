var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "front",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.01083005308614382,
          "pitch": 0.1894744993243087,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6788476854412675,
          "pitch": 0.17752027794748848,
          "title": "Hall Family Home",
          "text": "6 Bedrooms, 4.5 Bath<div>4400 sq ft</div>"
        }
      ]
    },
    {
      "id": "1-foyer",
      "name": "foyer",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01514469330210666,
          "pitch": 0.20606519698967674,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": 1.7312010512318015,
          "pitch": 0.24089550369240165,
          "rotation": 0,
          "target": "6-dining"
        },
        {
          "yaw": -2.978381569394788,
          "pitch": 0.33065813608766526,
          "rotation": 0,
          "target": "5-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00950924974970846,
          "pitch": 0.1884346500032379,
          "rotation": 0,
          "target": "5-center"
        },
        {
          "yaw": -0.7121633080768479,
          "pitch": 0.21631902148785365,
          "rotation": 5.497787143782138,
          "target": "4-nook"
        },
        {
          "yaw": 1.0453020415789034,
          "pitch": 0.2590300755083348,
          "rotation": 0.7853981633974483,
          "target": "6-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3370227468149416,
          "pitch": 0.38597682830017277,
          "rotation": 0,
          "target": "5-center"
        },
        {
          "yaw": -0.8512474972587167,
          "pitch": 0.23674122342794846,
          "rotation": 5.497787143782138,
          "target": "4-nook"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-nook",
      "name": "nook",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3075350779272483,
          "pitch": 0.10003974658945936,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -2.1069076569394998,
          "pitch": 0.26337620208711776,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-center",
      "name": "center",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8751464930494866,
          "pitch": 0.2348882681957427,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -1.4184423651513711,
          "pitch": 0.23837786596869748,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -3.101628615870183,
          "pitch": 0.2702189161948674,
          "rotation": 0,
          "target": "1-foyer"
        },
        {
          "yaw": -0.9056344761423727,
          "pitch": 0.13654766996003964,
          "rotation": 0.7853981633974483,
          "target": "4-nook"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining",
      "name": "dining",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.037839418893682364,
          "pitch": 0.336452183296295,
          "rotation": 0,
          "target": "1-foyer"
        },
        {
          "yaw": -0.8940270157682413,
          "pitch": 0.28791762877872706,
          "rotation": 4.71238898038469,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
