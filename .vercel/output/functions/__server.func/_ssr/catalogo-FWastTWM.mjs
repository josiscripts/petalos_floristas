import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Search, v as Heart } from "../_libs/lucide-react.mjs";
import { f as useShop, h as cn, l as getLocalProducts, n as Route$4, p as Button, r as Input, s as categories } from "./router-ll8Jtdn1.mjs";
import { n as useProducts, t as ProductCard } from "./useProducts-rFEJaYaT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogo-FWastTWM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CatalogPage() {
	const { categoria, q, favoritos } = Route$4.useSearch();
	const navigate = useNavigate({ from: "/catalogo" });
	const { favorites } = useShop();
	const { data: productsFromSupabase, isLoading, error } = useProducts();
	const products = productsFromSupabase || getLocalProducts();
	const filtered = (0, import_react.useMemo)(() => {
		const query = (q ?? "").trim().toLowerCase();
		return products.filter((p) => {
			if (categoria && p.category !== categoria) return false;
			if (favoritos && !favorites.includes(p.id)) return false;
			if (query && !`${p.name} ${p.description}`.toLowerCase().includes(query)) return false;
			return true;
		});
	}, [
		categoria,
		q,
		favoritos,
		favorites,
		products
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-[0.35em] text-primary uppercase",
			children: "Catálogo"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-4 font-display text-4xl sm:text-5xl",
			children: "Flores, plantas y detalles"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Cargando catálogo..."
			})
		})]
	});
	if (error) console.error("Error loading products:", error);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.35em] text-primary uppercase",
					children: "Catálogo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl sm:text-5xl",
					children: "Flores, plantas y detalles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Todos los precios incluyen IVA. Las horquillas de precio corresponden al tamaño del arreglo: estándar, especial o premium."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: !categoria && !favoritos,
						onClick: () => navigate({ search: {} }),
						children: "Todo"
					}),
					categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: categoria === cat.id,
						onClick: () => navigate({ search: (prev) => ({
							...prev,
							categoria: cat.id
						}) }),
						children: cat.label
					}, cat.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterChip, {
						active: favoritos === true,
						onClick: () => navigate({ search: (prev) => ({
							...prev,
							favoritos: favoritos ? void 0 : true
						}) }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-3.5", favoritos && "fill-current") }),
							" Favoritos (",
							favorites.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative ml-auto w-full sm:w-72",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: q ?? "",
							onChange: (e) => navigate({ search: (prev) => ({
								...prev,
								q: e.target.value || void 0
							}) }),
							placeholder: "Buscar en el catálogo",
							"aria-label": "Buscar en el catálogo",
							className: "pl-9"
						})]
					})
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 rounded-lg border border-dashed border-border py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Sin resultados"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Prueba con otra búsqueda o escríbenos y lo preparamos a medida."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							children: "Contactar"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	});
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"),
		children
	});
}
//#endregion
export { CatalogPage as component };
