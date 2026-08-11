import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ChevronDown, a as Sun, s as Sparkles, x as Droplets, y as Gift } from "../_libs/lucide-react.mjs";
import { h as cn, i as company, l as getLocalProducts, o as cat_rosas_eternas_default, p as Button } from "./router-ll8Jtdn1.mjs";
import { n as useProducts, t as ProductCard } from "./useProducts-rFEJaYaT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rosas-eternas-DYuMnbJN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var steps = [
	{
		icon: Sparkles,
		title: "Rosa natural seleccionada",
		text: "Partimos de rosa fresca de corte premium, elegida en su punto óptimo de apertura."
	},
	{
		icon: Droplets,
		title: "Sustitución de la savia",
		text: "La savia se reemplaza por una solución vegetal que mantiene la textura y flexibilidad del pétalo."
	},
	{
		icon: Sun,
		title: "Sin agua ni luz directa",
		text: "No necesita riego ni sol. Basta mantenerla en interior, alejada de la humedad."
	},
	{
		icon: Gift,
		title: "Entre 7 y 10 años de vida",
		text: "Conserva su aspecto natural durante años, por eso es el regalo más duradero de la tienda."
	}
];
function RosasEternasPage() {
	const { data: productsFromSupabase } = useProducts();
	const eternas = (productsFromSupabase || getLocalProducts()).filter((p) => p.category === "rosas-eternas");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.35em] text-primary uppercase",
						children: "Flor preservada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-4xl sm:text-5xl",
						children: ["Rosas Eternas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-script text-primary",
							children: "que duran años"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-muted-foreground",
						children: "Son rosas naturales, no artificiales. Un proceso de preservación sustituye su savia por una solución vegetal que mantiene el tacto y el color del pétalo entre 7 y 10 años, sin agua y sin necesidad de luz."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalogo",
								search: { categoria: "rosas-eternas" },
								children: "Ver colección"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contacto",
								children: "Personalizar una caja"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cat_rosas_eternas_default,
					alt: "Caja negra con rosas eternas preservadas en tono fucsia",
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "w-full rounded-lg object-cover shadow-petal"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Cómo se preserva una rosa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-border/70 bg-card p-6 transition-colors hover:border-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-full bg-primary-soft text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs tracking-[0.25em] text-muted-foreground uppercase",
									children: ["Paso ", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: step.text
							})
						]
					}, step.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mx-auto mt-12 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "cuidados",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "¿Qué cuidados necesita?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Ninguno especial: no se riega ni se pulveriza. Manténla en interior, evita la humedad alta y la luz solar directa, y quita el polvo con un pincel suave o aire frío." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "colores",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "¿Puedo elegir el color y la dedicatoria?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, { children: [
								"Sí. Trabajamos rojo, rosa, blanco, nude y tonos especiales, y podemos grabar o rotular iniciales y dedicatorias en la caja. Llámanos al ",
								company.phone,
								" para verlo contigo."
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "duracion",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "¿Realmente duran de 7 a 10 años?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Sí, siempre que se respeten las condiciones de conservación. Con el paso del tiempo el tono puede matizarse ligeramente, algo natural en la flor preservada." })]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Colección de rosas eternas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: eternas.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			})
		})
	] });
}
//#endregion
export { RosasEternasPage as component };
