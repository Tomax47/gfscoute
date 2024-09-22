### GFScoute V1.0.0

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

**gfscoute** is a npm tool designed for effortless fonts fetching & downloading from Google Fonts.

## Features

- **Download By Name**: GFScoute makes it easy to search & download the font by its name.
- **Multiple Extensions Support**: The tool will download the font file locally in its original type [.tff, .woff2, etc...].

## Installation

To install **gfscoute**, use npm:

```bash
npm install gfscoute
```

or yarn:

```bash
yarn add gfscoute
```

## Usage

To use gfscoute, import or require the `DownloadFont` from the package:

```javascript
import DownloadFont from "gfscoute";
```

```javascript
const DownloadFont = require("gfscoute");
```

Example of calling the function /test/:

```javascript
import { DownloadFont, ScouteFont } from "gfscoute";

const fontName = "Roboto";

ScouteFont(fontName)
  .then((resp) => {
    if (resp) {
      DownloadFont(fontName)
        .then(console.log("Success"))
        .catch((error) => {
          // Handle the error as you want here
          console.log(error);
        });
    } else {
      // Hadnle font not found case
    }
  })
  .catch((error) => {
    // Handle error
  });
```

Complete example:

```typescript
"use client";

import { useState } from "react";
import DownloadFont from "gfscoute";

export default function Fonts() {
  const [fontName, setFontName] = useState("");

  const hadnleDownload = (name: string) => {
    DownloadFont(name)
      .then(() => console.log("Success"));
      .catch((error: Error) => {
        throw error;
      });
  };

  return (
    <>
      <h1>Type font's name</h1>
      <input
        id="fontName"
        value={fontName}
        onChange={(e) => setFontName(e.target.value)}
      />
      <button onClick={() => hadnleDownload(fontName)}>
        {" "}
        Download Font
      </button>
    </>
  );
}
```
