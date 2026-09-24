import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "quiet" }) {
  return <button className={cn("btn", variant === "primary" ? "btn-primary" : variant === "outline" ? "btn-outline" : "btn-quiet", className)} {...props} />;
}
export function ActionLink({ to, children, variant = "primary", className }: { to: "/" | "/about" | "/brands" | "/pricing" | "/tracker" | "/contact"; children: ReactNode; variant?: "primary" | "outline"; className?: string }) {
  return <Link to={to} className={cn("btn", variant === "primary" ? "btn-primary" : "btn-outline", className)}>{children}{variant === "outline" && <ArrowRight className="size-4" />}</Link>;
}
export function PageIntro({ code, title, copy }: { code: string; title: string; copy: string }) {
  return <section className="page-intro section-shell"><motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}><p className="eyebrow">{code}</p><h1 className="page-title">{title}</h1><p className="page-copy">{copy}</p></motion.div></section>;
}
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>{children}</motion.div>;
}
