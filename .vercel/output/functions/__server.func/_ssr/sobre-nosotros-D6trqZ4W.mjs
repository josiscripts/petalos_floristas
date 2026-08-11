import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as company, m as bodas_default, p as Button } from "./router-ll8Jtdn1.mjs";
import { t as sobre_nosotros_default } from "./sobre-nosotros-U7wB3f3o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sobre-nosotros-D6trqZ4W.js
var import_jsx_runtime = require_jsx_runtime();
function SobreNosotrosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.35em] text-primary uppercase",
						children: "Sobre nosotros"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-4xl sm:text-5xl",
						children: ["Tres generaciones", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-script text-primary",
							children: "cuidando flores"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pétalos Floristas nació como un pequeño negocio familiar en Alcalá de Henares y hoy sigue en manos de la familia: tres generaciones que se han pasado el oficio de padres a hijos, con la misma forma de entender la flor." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "En el taller de la calle Navarro y Ledesma se monta cada ramo a mano. Elegimos flor fresca cada mañana, trabajamos con proveedores de confianza y aconsejamos sin prisa, porque detrás de cada pedido hay una celebración, una disculpa o una despedida." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Rocío atiende personalmente la tienda y acompaña a quien no sabe qué elegir. Ese trato es lo que nuestros clientes destacan en sus ",
								company.reviews,
								" reseñas."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalogo",
								children: "Ver catálogo"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contacto",
								children: "Visítanos"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sobre_nosotros_default,
					alt: "Interior de la floristería con estanterías y cubos de flor fresca",
					loading: "lazy",
					width: 1280,
					height: 960,
					className: "w-full rounded-lg object-cover shadow-soft"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "font-display text-2xl leading-snug italic sm:text-4xl",
					children: "«Con libertad, libros, flores y la luna, ¿quién no puede ser feliz?»"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-script text-2xl text-primary",
					children: "Oscar Wilde"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: bodas_default,
					alt: "Floristera montando un ramo de novia en el taller",
					loading: "lazy",
					width: 1280,
					height: 960,
					className: "w-full rounded-lg object-cover shadow-soft"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Bodas y eventos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Diseñamos ramos de novia, prendidos, decoración de iglesia y ambientación de espacios. Trabajamos con cita previa para estudiar el estilo, la paleta y el presupuesto con tiempo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							children: "Solicitar presupuesto"
						})
					})
				] })]
			})
		})
	] });
}
//#endregion
export { SobreNosotrosPage as component };
