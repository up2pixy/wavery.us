import { WaveryColorInfo, WaveryOption } from "../wavery/wavery";

const presetColorPatterns: WaveryColorInfo[][] = [
  // 1
  [
    {
      colorValue: "#00677a",
      position: 0
    },
    {
      colorValue: "#d9e3c0",
      position: 1
    }
  ],
  // 2
  [
    {
      colorValue: "#eeeeee",
      position: 0
    },
    {
      colorValue: "#222222",
      position: 1
    }
  ],
  // 3
  [
    {
      colorValue: "#1e3756",
      position: 0
    },
    {
      colorValue: "#ea8a7a",
      position: 1
    }
  ],
  // 4
  [
    {
      colorValue: "#0b1f5d",
      position: 0
    },
    {
      colorValue: "#00b1c0",
      position: 1
    }
  ],
  // 5
  [
    {
      colorValue: "#821a57",
      position: 0
    },
    {
      colorValue: "#f6c5c9",
      position: 1
    }
  ],
  // 6
  [
    {
      colorValue: "#3a5065",
      position: 0
    },
    {
      colorValue: "#e7d6ab",
      position: 1
    }
  ],
  // 7
  [
    {
      colorValue: "#fcfddf",
      position: 0
    },
    {
      colorValue: "#d66b72",
      position: 1
    }
  ],
  // 8
  [
    {
      colorValue: "#7dc5c1",
      position: 0
    },
    {
      colorValue: "#3e1744",
      position: 1
    }
  ],
  // 9
  [
    {
      colorValue: "#007355",
      position: 0
    },
    {
      colorValue: "#f6cdb9",
      position: 1
    }
  ],
  // 10
  [
    {
      colorValue: "#3f4d98",
      position: 0
    },
    {
      colorValue: "#e76f78",
      position: 1
    }
  ],
  // 11
  [
    {
      colorValue: "#df3f4b",
      position: 0
    },
    {
      colorValue: "#fee469",
      position: 1
    }
  ],
  // 12
  [
    {
      colorValue: "#693f71",
      position: 0
    },
    {
      colorValue: "#b1cae8",
      position: 1
    }
  ],
  // 13
  [
    {
      colorValue: "#0b2f6d",
      position: 0
    },
    {
      colorValue: "#eda7c3",
      position: 1
    }
  ],
  // 14
  [
    {
      colorValue: "#366473",
      position: 0
    },
    {
      colorValue: "#e7d5ad",
      position: 1
    }
  ],
  // 15
  [
    {
      colorValue: "#63ba97",
      position: 0
    },
    {
      colorValue: "#383234",
      position: 1
    }
  ],
  // 16
  [
    {
      colorValue: "#3976a2",
      position: 0
    },
    {
      colorValue: "#e9e6dd",
      position: 1
    }
  ],
  // 17
  [
    {
      colorValue: "#3a5065",
      position: 0
    },
    {
      colorValue: "#eda086",
      position: 1
    }
  ],
  // 18
  [
    {
      colorValue: "#fdef84",
      position: 0
    },
    {
      colorValue: "#3d6e71",
      position: 1
    }
  ]
];
const defaultWidth: number = 1600;
const defaultHeight: number = 1200;
const defaultTurnCount: number = 25;
const defaultLayerCount: number = 10;
const defaultVariance: number = 80;
const defaultColorPatternIndex: number = Math.floor(Math.random() * (presetColorPatterns.length - 1));
const defaultOption: WaveryOption = {
  width: defaultWidth,
  height: defaultHeight,
  segmentCount: defaultTurnCount,
  layerCount: defaultLayerCount,
  variance: defaultVariance / 100,
  strokeWidth: 0,
  strokeColor: "none",
  gradientColors: presetColorPatterns[defaultColorPatternIndex],
  seed: Date.now().toString()
};

export const Constants = {
  minWidth: 10,
  maxWidth: 4096,
  minHeight: 10,
  maxHeight: 4096,
  defaultWidth,
  defaultHeight,
  defaultTurnCount,
  defaultLayerCount,
  defaultVariance,
  presetColorPatterns,
  defaultColorPatternIndex,
  defaultOption
};
