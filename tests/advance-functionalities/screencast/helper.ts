/**
 * Generates an HTML notification banner to be used as a screencast overlay.
 *
 * Returns a self-contained HTML document with a centered, rounded banner
 * displaying the given text. Colors are customizable via the options parameter.
 *
 * @param text - The message to display inside the overlay banner.
 * @param options - Optional styling overrides for background and text colors.
 * @returns A full HTML string suitable for `page.screencast.showOverlay()`.
 */
export const createOverlay = (
  text: string,
  options?: { backgroundColor: string; textColor: string },
): string => {
  const backgroundColor = options?.backgroundColor || "rgb(196, 244, 84)";
  const textColor = options?.textColor || "#666";
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notification Banner</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .notification-banner {
      background:${backgroundColor};
      border-radius: 12px;
      padding: 10px 18px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06);
      display: flex;
      align-items: center;
      gap: 12px;
      max-width: 420px;
    }


    .notification-banner .content {
      flex: 1;
    }

    .notification-banner .message {
      font-size: 13px;
      color: ${textColor} ;
      margin-top: 2px;
    }

  </style>
</head>
<body>
  <div class="notification-banner">
    <div class="content">
      <div class="message">${text}</div>
    </div>
  </div>
</body>
</html>
`;
};
