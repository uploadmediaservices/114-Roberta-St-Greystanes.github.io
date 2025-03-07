var APP_DATA = {
  "scenes": [
    {
      "id": "0-porch",
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
        "yaw": 1.0782097253098097,
        "pitch": -0.05809030840124585,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": 1.686089915261416,
          "pitch": 0.05429572488511525,
          "rotation": 0,
          "target": "1-foyer1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer1",
      "name": "Foyer1",
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
        "yaw": -1.3323391049801465,
        "pitch": 0.07816284921525352,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": 1.8272159443993141,
          "pitch": 0.13148733382706368,
          "rotation": 0,
          "target": "0-porch"
        },
        {
          "yaw": 0.03840942254270807,
          "pitch": -0.15531447168874024,
          "rotation": 5.497787143782138,
          "target": "4-rumpus"
        },
        {
          "yaw": -2.827143792920328,
          "pitch": 0.4329601410603132,
          "rotation": 0,
          "target": "2-foyer2"
        },
        {
          "yaw": -2.5829634245867545,
          "pitch": 0.0633331640096273,
          "rotation": 1.5707963267948966,
          "target": "3-downstairs-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-foyer2",
      "name": "Foyer2",
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
        "yaw": -0.7352663435284015,
        "pitch": 0.1522550062398107,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": 2.3861172718936023,
          "pitch": 0.43177224054472063,
          "rotation": 0,
          "target": "1-foyer1"
        },
        {
          "yaw": 2.40652469045353,
          "pitch": -0.00665863163358793,
          "rotation": 11.780972450961727,
          "target": "4-rumpus"
        },
        {
          "yaw": 2.877578458148003,
          "pitch": 0.06793689450699958,
          "rotation": 1.5707963267948966,
          "target": "0-porch"
        },
        {
          "yaw": -0.07369889257846296,
          "pitch": 0.13098944087225206,
          "rotation": 1.5707963267948966,
          "target": "3-downstairs-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-downstairs-bath",
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
          "yaw": -1.7627133105115824,
          "pitch": 0.3264130013915558,
          "rotation": 0,
          "target": "2-foyer2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-rumpus",
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
        "yaw": 2.4391134185880716,
        "pitch": 0.0035134690203939556,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": -2.477227543509393,
          "pitch": 0.4293878135928466,
          "rotation": 3.141592653589793,
          "target": "1-foyer1"
        },
        {
          "yaw": 2.986590379004433,
          "pitch": 0.4837773111959027,
          "rotation": 5.497787143782138,
          "target": "5-kitchendining"
        },
        {
          "yaw": 0.6067432771609056,
          "pitch": 0.5106772647612168,
          "rotation": 0,
          "target": "6-living"
        },
        {
          "yaw": 0.524194132368704,
          "pitch": 0.14469739696038886,
          "rotation": 0,
          "target": "16-alfresco"
        },
        {
          "yaw": -1.7204654337217402,
          "pitch": 0.06813088597121109,
          "rotation": 1.5707963267948966,
          "target": "8-downstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchendining",
      "name": "Kitchen/Dining",
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
        "yaw": 0.8675921029997546,
        "pitch": 0.20600869789723752,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": -2.4748788071906844,
          "pitch": 0.3110501793899729,
          "rotation": 3.9269908169872414,
          "target": "1-foyer1"
        },
        {
          "yaw": -2.004070222494102,
          "pitch": 0.1361640852819761,
          "rotation": 3.141592653589793,
          "target": "8-downstairs"
        },
        {
          "yaw": -1.159860721685245,
          "pitch": 0.6265036206522812,
          "rotation": 0.7853981633974483,
          "target": "4-rumpus"
        },
        {
          "yaw": -0.9373816163370172,
          "pitch": 0.2895846302212508,
          "rotation": 0,
          "target": "6-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living",
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
        "yaw": 2.728789978541755,
        "pitch": 0.10502044687491008,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": 1.2899387751880962,
          "pitch": 0.3258172143964302,
          "rotation": 0,
          "target": "16-alfresco"
        },
        {
          "yaw": 2.737253625395243,
          "pitch": 0.16421724132661275,
          "rotation": 1.5707963267948966,
          "target": "7-laundry"
        },
        {
          "yaw": -1.6502789798340984,
          "pitch": 0.3898097023670939,
          "rotation": 0,
          "target": "4-rumpus"
        },
        {
          "yaw": -1.4399302997103032,
          "pitch": 0.13115985299234012,
          "rotation": 3.141592653589793,
          "target": "1-foyer1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-laundry",
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
        "yaw": -0.6571702896516296,
        "pitch": 0.18828360866335458,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": 1.7541971339219185,
          "pitch": 0.21289825516257466,
          "rotation": 0,
          "target": "6-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-downstairs",
      "name": "Downstairs",
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
          "yaw": 0.8449630891215296,
          "pitch": 0.48240304065555506,
          "rotation": 0,
          "target": "4-rumpus"
        },
        {
          "yaw": -0.5531960992759881,
          "pitch": -0.02716630537471687,
          "rotation": 0,
          "target": "13-upstairs"
        },
        {
          "yaw": -2.2974205210601255,
          "pitch": 0.11026479466335104,
          "rotation": 4.71238898038469,
          "target": "9-master-bed"
        },
        {
          "yaw": -1.5921679615094178,
          "pitch": -0.027472152326811994,
          "rotation": 1.5707963267948966,
          "target": "11-bed2"
        },
        {
          "yaw": -1.5874869783141143,
          "pitch": 0.10112527306964125,
          "rotation": 2.356194490192345,
          "target": "12-downstairs-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bed",
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
          "yaw": 0.8695503709255519,
          "pitch": 0.25217066239193997,
          "rotation": 0,
          "target": "8-downstairs"
        },
        {
          "yaw": -0.08363200472905596,
          "pitch": 0.04319136903516174,
          "rotation": 1.5707963267948966,
          "target": "10-ens"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ens",
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
          "yaw": 1.5179373247494254,
          "pitch": 0.058575346079777546,
          "rotation": 10.995574287564278,
          "target": "9-master-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bed2",
      "name": "Bed2",
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
          "yaw": 3.0129301563535336,
          "pitch": 0.22107014015472615,
          "rotation": 0,
          "target": "8-downstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-downstairs-bath",
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
          "yaw": 2.8467298345868315,
          "pitch": 0.22326248695357265,
          "rotation": 0,
          "target": "8-downstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-upstairs",
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
          "yaw": -3.077375226415949,
          "pitch": 0.2851707768189051,
          "rotation": 3.141592653589793,
          "target": "8-downstairs"
        },
        {
          "yaw": -1.6383307336748754,
          "pitch": 0.042779093705762605,
          "rotation": 5.497787143782138,
          "target": "14-bed3"
        },
        {
          "yaw": 0.7495678796268326,
          "pitch": 0.1438266760942568,
          "rotation": 0.7853981633974483,
          "target": "15-bed4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bed3",
      "name": "Bed3",
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
          "yaw": -1.1148072740735095,
          "pitch": 0.29147435234343,
          "rotation": 0.7853981633974483,
          "target": "13-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bed4",
      "name": "Bed4",
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
          "yaw": -1.087857881387885,
          "pitch": 0.2239038777057658,
          "rotation": 5.497787143782138,
          "target": "13-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-alfresco",
      "name": "Alfresco",
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
          "yaw": 1.2477046076876412,
          "pitch": 0.21007593003590053,
          "rotation": 0,
          "target": "6-living"
        },
        {
          "yaw": -0.16612413740114107,
          "pitch": 0.5255885183994646,
          "rotation": 0,
          "target": "17-kitchenette"
        },
        {
          "yaw": 2.9574555918123293,
          "pitch": 0.21809313014997223,
          "rotation": 0,
          "target": "18-spa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-kitchenette",
      "name": "Kitchenette",
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
          "yaw": -2.80943099228546,
          "pitch": 0.415449410052501,
          "rotation": 0,
          "target": "19-backyard"
        },
        {
          "yaw": 1.891023033524748,
          "pitch": 0.6315361481962665,
          "rotation": 0,
          "target": "16-alfresco"
        },
        {
          "yaw": 1.4610562273340522,
          "pitch": 0.11312668816489158,
          "rotation": 5.497787143782138,
          "target": "6-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-spa",
      "name": "Spa",
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
          "yaw": 2.5400802326340592,
          "pitch": 0.40579439121078664,
          "rotation": 0,
          "target": "16-alfresco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-backyard",
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
        "yaw": -1.525169180123548,
        "pitch": -0.0710653602592366,
        "fov": 1.518435062229495
      },
      "linkHotspots": [
        {
          "yaw": -2.9649467237758973,
          "pitch": 0.20218617710095899,
          "rotation": 0,
          "target": "17-kitchenette"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "114 Roberta Street Greystanes",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
