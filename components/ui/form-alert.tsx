"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle2, XCircle } from "lucide-react"

interface FormAlertProps {
  isOpen: boolean
  onClose: () => void
  type: 'success' | 'error'
  title: string
  message: string
}

export function FormAlert({ isOpen, onClose, type, title, message }: FormAlertProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card/50 backdrop-blur-sm border-muted/50">
        <DialogHeader>
          <div className={`mx-auto ${type === 'success' ? 'bg-green-500/10' : 'bg-red-500/10'} p-3 rounded-full w-fit`}>
            {type === 'success' ? (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
              <XCircle className="h-6 w-6 text-red-500" />
            )}
          </div>
          <DialogTitle className="text-xl text-center pt-4">{title}</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {message}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
} 