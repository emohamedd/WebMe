export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohamed Amine El Gaouej. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Designed and built with ❤️ By Emohamedd</p>
        </div>
      </div>
    </footer>
  )
}

