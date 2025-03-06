var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8094481367976236,
          "pitch": 0.4395270701354317,
          "rotation": 12.566370614359176,
          "target": "1-foyerleft"
        },
        {
          "yaw": -2.566769851519055,
          "pitch": 0.06994148368886144,
          "rotation": 1.5707963267948966,
          "target": "2-downstair-bath"
        },
        {
          "yaw": 0.324001676674019,
          "pitch": -0.10524473390845657,
          "rotation": 5.497787143782138,
          "target": "3-rumpus"
        },
        {
          "yaw": 1.828704414267861,
          "pitch": 0.1253027985720987,
          "rotation": 0,
          "target": "19-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyerleft",
      "name": "Foyerleft",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07792323884487296,
          "pitch": 0.1700715655391143,
          "rotation": 1.5707963267948966,
          "target": "2-downstair-bath"
        },
        {
          "yaw": 2.3786717573287612,
          "pitch": 0.4290180098003873,
          "rotation": 3.141592653589793,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-downstair-bath",
      "name": "Downstair bath",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7381326771761625,
          "pitch": 0.3414145722258244,
          "rotation": 4.71238898038469,
          "target": "1-foyerleft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-rumpus",
      "name": "Rumpus",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5419547453847393,
          "pitch": 0.28033679670314804,
          "rotation": 3.141592653589793,
          "target": "0-foyer"
        },
        {
          "yaw": 3.104345252849983,
          "pitch": 0.5334465399206128,
          "rotation": 5.497787143782138,
          "target": "4-dining"
        },
        {
          "yaw": 0.5910913245898293,
          "pitch": 0.47216330201802137,
          "rotation": 0,
          "target": "5-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining",
      "name": "Dining",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-living",
      "name": "Living",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.488884679362446,
          "pitch": 0.4226521385052351,
          "rotation": 0,
          "target": "3-rumpus"
        },
        {
          "yaw": -1.4898125576157462,
          "pitch": 0.14096994710424937,
          "rotation": 3.141592653589793,
          "target": "0-foyer"
        },
        {
          "yaw": -1.7857501101957318,
          "pitch": 0.27946052828282575,
          "rotation": 5.497787143782138,
          "target": "4-dining"
        },
        {
          "yaw": 2.7246801295290703,
          "pitch": 0.1921021991753591,
          "rotation": 0,
          "target": "6-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-laundry",
      "name": "Laundry",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7647032715327153,
          "pitch": 0.23099568414286864,
          "rotation": 0,
          "target": "5-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upstairs",
      "name": "Upstairs",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.773265238379107,
          "pitch": 0.4946784518241216,
          "rotation": 0,
          "target": "3-rumpus"
        },
        {
          "yaw": -0.5584139408203743,
          "pitch": -0.35110668038396753,
          "rotation": 0,
          "target": "12-upstairs-up"
        },
        {
          "yaw": -2.3056642776251834,
          "pitch": 0.15300763984318522,
          "rotation": 4.71238898038469,
          "target": "8-master-bed"
        },
        {
          "yaw": -1.5722938827681414,
          "pitch": 0.1394077789658965,
          "rotation": 1.5707963267948966,
          "target": "11-downstairs-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-bed",
      "name": "Master Bed",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2164729449715637,
          "pitch": 0.1813887420971838,
          "rotation": 4.71238898038469,
          "target": "7-upstairs"
        },
        {
          "yaw": 0.9296646733316027,
          "pitch": 0.13121083130712208,
          "rotation": 0,
          "target": "9-ens"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ens",
      "name": "ENS",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12045711936531056,
          "pitch": 0.1392114561128004,
          "rotation": 1.5707963267948966,
          "target": "8-master-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-r0010512_20250305121916",
      "name": "R0010512_20250305121916",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-downstairs-bath",
      "name": "Downstairs Bath",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8185410296904916,
          "pitch": 0.2434972161099438,
          "rotation": 0,
          "target": "7-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-upstairs-up",
      "name": "Upstairs Up",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.029191633118895,
          "pitch": 0.12564253945218695,
          "rotation": 3.141592653589793,
          "target": "7-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-r0010515_20250305122552",
      "name": "R0010515_20250305122552",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "14-r0010516_20250305122701",
      "name": "R0010516_20250305122701",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "15-r0010517_20250305122816",
      "name": "R0010517_20250305122816",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "16-r0010518_20250305122844",
      "name": "R0010518_20250305122844",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "17-r0010519_20250305122914",
      "name": "R0010519_20250305122914",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "18-backyard",
      "name": "Backyard",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "19-porch",
      "name": "Porch",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6933937743759602,
          "pitch": 0.041868030607005835,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
