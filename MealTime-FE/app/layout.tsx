export const metadata = {
  title: 'MealTime - Food Delivery',
  description: 'Order food from your favorite restaurants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
