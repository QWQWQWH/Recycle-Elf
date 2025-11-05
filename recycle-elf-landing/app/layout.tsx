export const metadata = {
  title: "Recycle Elf — Smart Recycling",
  description: "Smart bins + QR scan + points & avatars.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
