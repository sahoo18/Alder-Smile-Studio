# Alder Smile Studio — Admin & Booking Upgrade

A modern React + Vite dental clinic website with an animated visual interface, booking page, login screen, and admin dashboard.

## What's included

- Premium animated gradients and floating visual effects
- Image hover and reveal animations
- Responsive dental clinic landing page
- Dedicated **Book a Visit** page
- Client-side form validation
- Booking requests saved with browser `localStorage`
- Admin login page and dashboard
- Live appointment list showing website booking requests
- Appointment search, confirm/pending toggle, and delete actions
- Responsive layout for desktop and mobile

## Run locally

Open the project folder containing `package.json` and run:

```bash
npm.cmd install
npm.cmd run dev
```

Then open the local URL shown by Vite.

> If `npm` is blocked in PowerShell by the execution policy, use `npm.cmd` as shown above.

## Demo admin login

The current front-end demo accepts any non-empty username and password.

## Important note

Bookings and login state are currently stored only in the browser using `localStorage`. For production, connect the project to a real backend and database.
