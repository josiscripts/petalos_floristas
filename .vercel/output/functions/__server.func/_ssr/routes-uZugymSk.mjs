import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as Flower2, o as Star, r as Truck } from "../_libs/lucide-react.mjs";
import { a as campaigns, i as company, l as getLocalProducts, p as Button, s as categories } from "./router-ll8Jtdn1.mjs";
import { n as useProducts, t as ProductCard } from "./useProducts-rFEJaYaT.mjs";
import { t as sobre_nosotros_default } from "./sobre-nosotros-U7wB3f3o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uZugymSk.js
var import_jsx_runtime = require_jsx_runtime();
var hero_bouquet_default = "/assets/hero-bouquet-DhOr0U0A.jpg";
function Index() {
	const { data: productsFromSupabase } = useProducts();
	const destacados = (productsFromSupabase || getLocalProducts()).filter((p) => [
		"ramo-felicidad",
		"ramo-girasoles",
		"caja-rosas-eternas",
		"centro-orquideas-variadas"
	].includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.35em] text-primary uppercase",
						children: "Alcalá de Henares · desde tres generaciones"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-4xl leading-[1.05] text-balance-tight sm:text-6xl",
						children: ["El arte floral que hereda", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-script text-primary",
							children: "manos de familia"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "Cada ramo se monta a mano en nuestro taller de la calle Navarro y Ledesma, con flor fresca elegida en la lonja esa misma mañana y el mimo de una floristería que lleva décadas acompañando bodas, aniversarios y despedidas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/catalogo",
								children: ["Ver Catálogo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/rosas-eternas",
								children: "Rosas Eternas"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_bouquet_default,
						alt: "Ramo de rosas y ranúnculos rosados envuelto en papel kraft",
						width: 1600,
						height: 1200,
						className: "w-full rounded-lg object-cover shadow-petal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg border border-border/70 bg-card p-4 shadow-soft sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex text-primary",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: company.rating
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: [company.reviews, " reseñas · Powered by Google"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-snug",
								children: "«El trato de Rocío es exquisito, te asesora y acierta siempre.»"
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Nuestras colecciones"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-muted-foreground",
					children: "Flor fresca, plantas y flor preservada. Elige por categoría y lo preparamos para hoy."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalogo",
						children: ["Todo el catálogo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/catalogo",
					search: { categoria: cat.id },
					className: "group overflow-hidden rounded-lg border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-petal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cat.image,
						alt: cat.label,
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: cat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: cat.blurb
						})]
					})]
				}, cat.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-16 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Fechas especiales"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-3",
					children: campaigns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-primary/25 bg-primary-soft p-6 transition-colors hover:border-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.25em] text-accent-foreground uppercase",
								children: c.dates
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: c.text
							})
						]
					}, c.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl",
				children: "Los más regalados"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: destacados.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-16 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sobre_nosotros_default,
					alt: "Interior de la floristería con cubos de flor fresca",
					loading: "lazy",
					width: 1280,
					height: 960,
					className: "w-full rounded-lg object-cover shadow-soft"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Tres generaciones de flores"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Lo que empezó como un puesto de flores en Alcalá de Henares es hoy una floristería familiar donde la tercera generación sigue trabajando con las mismas manos y el mismo criterio: flor de calidad, composiciones honestas y consejo sincero."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-6 border-l-2 border-primary pl-5 font-display text-xl italic",
						children: ["«Con libertad, libros, flores y la luna, ¿quién no puede ser feliz?»", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-2 text-sm font-sans text-muted-foreground not-italic",
							children: "Oscar Wilde"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sobre-nosotros",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { className: "size-4" }), " Nuestra historia"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/envios",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4" }), " Zonas de entrega"]
							})
						})]
					})
				] })]
			})
		})
	] });
}
//#endregion
export { Index as component };
