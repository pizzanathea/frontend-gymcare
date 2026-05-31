import "./globals.css";

export const metadata = {
  title: "GymCare",
  description: "Smart Gym Facility Reporting System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}