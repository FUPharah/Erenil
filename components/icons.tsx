import { LucideProps,Moon,SunMedium,type Icon as LucideIcon,} from "lucide-react"
import Image from "next/image"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: () => (
    <Image
      src="/logo.png" // Update the path with the correct file name and extension
      alt="Logo"
      width={32} // Replace with the actual width of your image
      height={32} // Replace with the actual height of your image
    />
  ),
}
