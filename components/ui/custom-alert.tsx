"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Lock } from "lucide-react"

interface CustomAlertProps {
  isOpen: boolean
  onClose: () => void
}

export function CustomAlert({ isOpen, onClose }: CustomAlertProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card/50 backdrop-blur-sm border-muted/50">
        <DialogHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl text-center pt-4">Private Project</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Sorry, this is a private project. The source code cannot be shared as it contains sensitive institutional data.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
} 