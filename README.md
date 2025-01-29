# Hover Player

**HoverPlayer** is a React component that provides an interactive video player experience, allowing users to expand and collapse a video player seamlessly. It includes buttons for additional actions and customizable elements, making it perfect for enhancing your web applications.

## Demo

Check out a live demo of HoverPlayer in action:

[Watch the Demo](https://youtu.be/8Qp6VnwkCn0)

<video width="600" controls autoplay muted loop>
  <source src="https://youtu.be/8Qp6VnwkCn0" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)
- [Let us know!](#Letusknow)
- [License](#license)

## Installation

You can install `HoverPlayer` via npm:

```bash
npm install hover-player
```

## Usage

To use the HoverPlayer component, follow these steps:

1.Import the HoverPlayer component in your React file:

```bash
import HoverPlayer from  'hover-player';
```

2.Use the HoverPlayer component in your React application. Here’s how to do it:

```bash
function App() {
return (
  <HoverPlayer
    title="Video Title"
    thumbnail="thumbnail_url_here"
    youtubeVideoUrl="youtube_video_url_here"
    leftSideBtnUrl="left_button_url_here"
    leftSideBtnText="Left Button"
    rightSideBtnUrl="right_button_url_here"
    rightSideBtnText="Right Button"
  />
);
}

```

## Props

- **`title`** (string): The title of the video to display.
- **`thumbnail`** (string): The URL of the video's thumbnail image.
- **`youtubeVideoUrl`** (string): The URL of the YouTube video to play.
- **`leftSideBtnUrl`** (string): The URL for the left side button.
- **`leftSideBtnText`** (string): The text to display on the left side button.
- **`rightSideBtnUrl`** (string): The URL for the right side button.
- **`rightSideBtnText`** (string): The text to display on the right side button.

## Example

```bash
import React from 'react';
import ReactDOM from 'react-dom';
import HoverPlayer from 'hover-player';

function App() {
  return (
    <HoverPlayer
      title="My Video"
      thumbnail="https://example.com/thumbnail.jpg"
      youtubeVideoUrl="https://www.youtube.com/watch?v=example"
      leftSideBtnUrl="https://example.com/left"
      leftSideBtnText="Left Action"
      rightSideBtnUrl="https://example.com/right"
      rightSideBtnText="Right Action"
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

```

## Let us know!

If you use my open-source libraries in your project, please make sure to credit me and Give a star to [varunpatel.vercel.app](https://varunpatel.vercel.app/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
