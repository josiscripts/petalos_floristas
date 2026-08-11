import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Clock, S as CreditCard, h as MapPin, r as Truck, u as Search } from "../_libs/lucide-react.mjs";
import { i as company, r as Input } from "./router-ll8Jtdn1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/envios-CY74J7ej.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var coverage = [
	{
		name: "Ajalvir",
		province: "Madrid"
	},
	{
		name: "Alcalá de Henares",
		province: "Madrid"
	},
	{
		name: "Alcobendas",
		province: "Madrid"
	},
	{
		name: "Algete",
		province: "Madrid"
	},
	{
		name: "Alovera",
		province: "Guadalajara"
	},
	{
		name: "Anchuelo",
		province: "Madrid"
	},
	{
		name: "Arganda del Rey",
		province: "Madrid"
	},
	{
		name: "Azuqueca de Henares",
		province: "Guadalajara"
	},
	{
		name: "Cabanillas del Campo",
		province: "Guadalajara"
	},
	{
		name: "Camarma de Esteruelas",
		province: "Madrid"
	},
	{
		name: "Campo Real",
		province: "Madrid"
	},
	{
		name: "Chiloeches",
		province: "Guadalajara"
	},
	{
		name: "Cobeña",
		province: "Madrid"
	},
	{
		name: "Corpa",
		province: "Madrid"
	},
	{
		name: "Coslada",
		province: "Madrid"
	},
	{
		name: "Daganzo de Arriba",
		province: "Madrid"
	},
	{
		name: "El Pozo de Guadalajara",
		province: "Guadalajara"
	},
	{
		name: "El Robledal (Villalbilla)",
		province: "Madrid"
	},
	{
		name: "Eurovillas (Nuevo Baztán)",
		province: "Madrid"
	},
	{
		name: "Fresno de Torote",
		province: "Madrid"
	},
	{
		name: "Fuente El Saz de Jarama",
		province: "Madrid"
	},
	{
		name: "Galapagar",
		province: "Guadalajara"
	},
	{
		name: "Horche",
		province: "Guadalajara"
	},
	{
		name: "La Cardosa",
		province: "Madrid"
	},
	{
		name: "Los Santos de la Humosa",
		province: "Madrid"
	},
	{
		name: "Loeches",
		province: "Madrid"
	},
	{
		name: "Loranca de Tajuña",
		province: "Guadalajara"
	},
	{
		name: "Los Berrocales del Jarama",
		province: "Madrid"
	},
	{
		name: "Los Hueros",
		province: "Madrid"
	},
	{
		name: "Madrid",
		province: "Madrid"
	},
	{
		name: "Meco",
		province: "Madrid"
	},
	{
		name: "Mejorada del Campo",
		province: "Madrid"
	},
	{
		name: "Nuevo Baztán",
		province: "Madrid"
	},
	{
		name: "Olmeda de las Fuentes",
		province: "Madrid"
	},
	{
		name: "Paracuellos de Jarama",
		province: "Madrid"
	},
	{
		name: "Peñas Albas (Villalbilla)",
		province: "Madrid"
	},
	{
		name: "Pezuela de las Torres",
		province: "Madrid"
	},
	{
		name: "Pioz",
		province: "Guadalajara"
	},
	{
		name: "Pozuelo del Rey",
		province: "Madrid"
	},
	{
		name: "Quer",
		province: "Guadalajara"
	},
	{
		name: "Rivas-Vaciamadrid",
		province: "Madrid"
	},
	{
		name: "San Fernando de Henares",
		province: "Madrid"
	},
	{
		name: "San Sebastián de los Reyes",
		province: "Madrid"
	},
	{
		name: "Santorcaz",
		province: "Madrid"
	},
	{
		name: "Serracines",
		province: "Madrid"
	},
	{
		name: "Torrejón del Rey",
		province: "Guadalajara"
	},
	{
		name: "Torres de la Alameda",
		province: "Madrid"
	},
	{
		name: "Valdeavero",
		province: "Madrid"
	},
	{
		name: "Valdilecha",
		province: "Madrid"
	},
	{
		name: "Valverde de Alcalá",
		province: "Madrid"
	},
	{
		name: "Velilla de San Antonio",
		province: "Madrid"
	},
	{
		name: "Villalbilla",
		province: "Madrid"
	},
	{
		name: "Villanueva de la Torre",
		province: "Guadalajara"
	},
	{
		name: "Villar del Olmo",
		province: "Madrid"
	},
	{
		name: "Yebes",
		province: "Guadalajara"
	}
];
function CoverageSearch() {
	const [query, setQuery] = (0, import_react.useState)("");
	const groups = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		const filtered = coverage.filter((t) => t.name.toLowerCase().includes(q));
		return {
			Madrid: filtered.filter((t) => t.province === "Madrid"),
			Guadalajara: filtered.filter((t) => t.province === "Guadalajara"),
			count: filtered.length
		};
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: query,
				onChange: (e) => setQuery(e.target.value),
				placeholder: "Escribe tu población: Meco, Coslada, Pioz…",
				"aria-label": "Buscar población con servicio de entrega",
				className: "pl-9"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: groups.count === 0 ? "No entregamos con reparto propio en esa población. Llámanos y buscamos una solución." : `${groups.count} poblaciones con servicio de entrega propio.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-8 md:grid-cols-2",
			children: ["Madrid", "Guadalajara"].map((province) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "flex items-center gap-2 font-display text-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), province]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [groups[province].map((town) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border/70 bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary",
					children: town.name
				}, town.name)), groups[province].length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted-foreground",
					children: "Sin coincidencias."
				})]
			})] }, province))
		})
	] });
}
function EnviosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.35em] text-primary uppercase",
						children: "Envíos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl sm:text-5xl",
						children: "Dónde entregamos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted-foreground",
						children: [
							"Repartimos con vehículo propio para que la flor llegue en perfecto estado. Consulta tu población en el buscador; si no aparece, llámanos al ",
							company.phone,
							" y estudiamos la entrega."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-3",
				children: [
					{
						icon: Truck,
						title: "Reparto propio",
						text: "Sin mensajería externa en la zona de cobertura: la flor viaja en nuestras manos."
					},
					{
						icon: Clock,
						title: "Mismo día",
						text: "Pedidos confirmados por la mañana con entrega en el día según disponibilidad."
					},
					{
						icon: CreditCard,
						title: "Pago seguro",
						text: "Tarjeta con pasarela SSL, PayPal o transferencia. IVA incluido."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-border/70 bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-xl",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: item.text
						})
					]
				}, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Poblaciones con servicio de entrega"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverageSearch, {})
				})]
			})
		]
	});
}
//#endregion
export { EnviosPage as component };
