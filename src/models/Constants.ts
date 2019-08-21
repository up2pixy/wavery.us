import { WaveryColorInfo } from "../wavery/wavery";

const presetColorPatterns: WaveryColorInfo[][] = [
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
  [
    {
      colorValue: "#e9e6dd",
      position: 0
    },
    {
      colorValue: "#696967",
      position: 1
    }
  ],
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
  [
    {
      colorValue: "#63ba97",
      position: 0
    },
    {
      colorValue: "#f0ebb4",
      position: 1
    }
  ],
  [
    {
      colorValue: "#99bc44",
      position: 0
    },
    {
      colorValue: "#da2977",
      position: 1
    }
  ],
  [
    {
      colorValue: "#0b2f6d",
      position: 0
    },
    {
      colorValue: "#0091a0",
      position: 1
    }
  ],
  [
    {
      colorValue: "#4a746a",
      position: 0
    },
    {
      colorValue: "#b6ddbe",
      position: 1
    }
  ],
  [
    {
      colorValue: "#a23a77",
      position: 0
    },
    {
      colorValue: "#f6c5c9",
      position: 1
    }
  ],
  [
    {
      colorValue: "#006249",
      position: 0
    },
    {
      colorValue: "#8ea6d2",
      position: 1
    }
  ],
  [
    {
      colorValue: "#3a5065",
      position: 0
    },
    {
      colorValue: "#e7d6ab",
      position: 1
    }
  ]
];

export const Constants = {
  minWidth: 10,
  maxWidth: 4096,
  minHeight: 10,
  maxHeight: 4096,
  defaultWidth: 800,
  defaultHeight: 600,
  defaultTurnCount: 30,
  defaultLayerCount: 20,
  defaultVariance: 70,
  presetColorPatterns
};
