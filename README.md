# Fakenstocks

Fakenstocks allows you to play the stock market virtually and keep track of your
performance. You can add virtual funds, look up information about specific
stocks, "buy" and "sell" stocks, and view your overall portfolio.

## Design

Using Material Design for the layout and design language, I created [mockups]
for each page using [Balsamiq] and then consulted those mockups when developing
the app.

## Architecture

This is implemented as a single-page application.

On the frontend, I'm using [React] for the view layer, [React Router] for
navigation, [Redux] for state management, and [CSS Modules] for styling. All
files are coded in [TypeScript].

On the backend I have an [Express] server, which talks to Postgres using
[Bookshelf].

[TSLint] is used to lint TypeScript files; [Prettier] is used to format
JavaScript code; and [CSSLint] is used to lint CSS.
