import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { v as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as formatPrice, d as priceTiers, f as useShop, h as cn, p as Button, u as priceRangeLabel } from "./router-ll8Jtdn1.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useProducts-rFEJaYaT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { addLine, toggleFavorite, isFavorite } = useShop();
	const tiers = priceTiers(product);
	const [tierIndex, setTierIndex] = (0, import_react.useState)(0);
	const favorite = isFavorite(product.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-lg border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-petal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
				}),
				product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-primary-foreground",
					children: product.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": favorite ? "Quitar de favoritos" : "Añadir a favoritos",
					onClick: () => toggleFavorite(product.id),
					className: "absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", favorite && "fill-primary text-primary") })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl leading-tight",
					children: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: product.description
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-primary",
					children: priceRangeLabel(product)
				}),
				tiers.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTierIndex(i),
						className: cn("rounded-full border px-3 py-1 text-xs transition-colors", i === tierIndex ? "border-primary bg-primary-soft text-accent-foreground" : "border-border text-muted-foreground hover:border-primary"),
						children: [
							tier.label,
							" · ",
							formatPrice(tier.price)
						]
					}, tier.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-1",
					children: product.quoteOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							children: "Pedir presupuesto"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: () => {
							const tier = tiers[tierIndex] ?? tiers[0];
							if (!tier) return;
							addLine({
								productId: product.id,
								name: product.name,
								size: tier.label,
								price: tier.price,
								image: product.image
							});
							toast.success(`${product.name} añadido al carrito`);
						},
						children: "Añadir al carrito"
					})
				})
			]
		})]
	});
}
var supabase = createClient("https://ovtpgkdprxicktidleap.supabase.co", "sb_publishable_Vmmb3luzuzF80W3wHxmJ_w_V66U15pe");
async function fetchProducts() {
	const { data, error } = await supabase.from("products").select("*").eq("available", true).order("created_at", { ascending: true });
	if (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
	return (data || []).map((row) => ({
		id: row.id,
		name: row.name,
		category: row.category,
		description: row.description,
		priceMin: row.price_min,
		priceMax: row.price_max,
		image: row.image_url,
		badge: row.badge,
		quoteOnly: row.quote_only
	}));
}
function useProducts() {
	return useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
		staleTime: 36e5,
		gcTime: 864e5
	});
}
//#endregion
export { useProducts as n, ProductCard as t };
