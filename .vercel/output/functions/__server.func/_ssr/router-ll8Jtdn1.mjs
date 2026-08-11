import { r as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { S as CreditCard, _ as Landmark, c as ShoppingBag, d as Plus, f as Phone, g as Mail, h as MapPin, i as Trash2, l as ShieldCheck, m as Menu, n as Wallet, p as Minus, t as X, u as Search, v as Heart } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, c as DialogTrigger, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/bodas-JYfKcQup.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var bodas_default = "/assets/bodas-CXNtHzCY.jpg";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-RbMch3WD.js
var ShopContext = (0, import_react.createContext)(null);
var CART_KEY = "petalos-cart";
var FAV_KEY = "petalos-favorites";
function ShopProvider({ children }) {
	const [lines, setLines] = (0, import_react.useState)([]);
	const [favorites, setFavorites] = (0, import_react.useState)([]);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const rawCart = window.localStorage.getItem(CART_KEY);
			if (rawCart) setLines(JSON.parse(rawCart));
			const rawFav = window.localStorage.getItem(FAV_KEY);
			if (rawFav) setFavorites(JSON.parse(rawFav));
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		window.localStorage.setItem(CART_KEY, JSON.stringify(lines));
	}, [lines, hydrated]);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		window.localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
	}, [favorites, hydrated]);
	const addLine = (0, import_react.useCallback)((line, qty = 1) => {
		const key = `${line.productId}::${line.size}`;
		setLines((prev) => {
			if (prev.find((l) => l.key === key)) return prev.map((l) => l.key === key ? {
				...l,
				qty: l.qty + qty
			} : l);
			return [...prev, {
				...line,
				key,
				qty
			}];
		});
		setCartOpen(true);
	}, []);
	const setQty = (0, import_react.useCallback)((key, qty) => {
		setLines((prev) => qty <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => l.key === key ? {
			...l,
			qty
		} : l));
	}, []);
	const removeLine = (0, import_react.useCallback)((key) => {
		setLines((prev) => prev.filter((l) => l.key !== key));
	}, []);
	const toggleFavorite = (0, import_react.useCallback)((productId) => {
		setFavorites((prev) => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]);
	}, []);
	const value = (0, import_react.useMemo)(() => {
		const count = lines.reduce((sum, l) => sum + l.qty, 0);
		const total = lines.reduce((sum, l) => sum + l.qty * l.price, 0);
		return {
			lines,
			favorites,
			cartOpen,
			count,
			total,
			setCartOpen,
			addLine,
			setQty,
			removeLine,
			clearCart: () => setLines([]),
			toggleFavorite,
			isFavorite: (productId) => favorites.includes(productId)
		};
	}, [
		lines,
		favorites,
		cartOpen,
		addLine,
		setQty,
		removeLine,
		toggleFavorite
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopContext.Provider, {
		value,
		children
	});
}
function useShop() {
	const ctx = (0, import_react.useContext)(ShopContext);
	if (!ctx) throw new Error("useShop debe usarse dentro de ShopProvider");
	return ctx;
}
var cat_ramos_default = "/assets/cat-ramos-BJd8mmJv.jpg";
var girasoles_default = "/assets/girasoles-CpIpqaET.jpg";
var cat_plantas_default = "/assets/cat-plantas-C1PzFkms.jpg";
var cat_rosas_eternas_default = "/assets/cat-rosas-eternas-BF5wESUr.jpg";
var cat_complementos_default = "/assets/cat-complementos-gXhkULTZ.jpg";
var categories = [
	{
		id: "ramos",
		label: "Ramos de flores",
		blurb: "Ramos de temporada montados a mano cada mañana en el taller.",
		image: cat_ramos_default
	},
	{
		id: "plantas",
		label: "Plantas y cestas",
		blurb: "Composiciones, orquídeas y cestas para regalar y decorar.",
		image: cat_plantas_default
	},
	{
		id: "rosas-eternas",
		label: "Rosas eternas",
		blurb: "Flor natural preservada que dura entre 7 y 10 años.",
		image: cat_rosas_eternas_default
	},
	{
		id: "complementos",
		label: "Complementos",
		blurb: "Jarrones, bombones belgas, peluches y detalles para el pedido.",
		image: cat_complementos_default
	}
];
var products = [
	{
		id: "ramo-silvestre",
		name: "Ramo Silvestre",
		category: "ramos",
		priceMin: 30,
		priceMax: 45,
		image: cat_ramos_default,
		description: "Flor variada de temporada con aire campestre y mucho movimiento."
	},
	{
		id: "ramo-felicidad",
		name: "Ramo Felicidad",
		category: "ramos",
		priceMin: 35,
		priceMax: 50,
		image: cat_ramos_default,
		description: "Tonos luminosos en rosa y blanco para celebrar buenas noticias.",
		badge: "Más vendido"
	},
	{
		id: "ramo-alegria",
		name: "Ramo Alegría",
		category: "ramos",
		priceMin: 35,
		priceMax: 50,
		image: cat_ramos_default,
		description: "Colores vivos y contrastados, un ramo que se ve desde lejos."
	},
	{
		id: "ramo-girasoles",
		name: "Ramo de Girasoles",
		category: "ramos",
		priceMin: 30,
		priceMax: 45,
		image: girasoles_default,
		description: "Girasoles frescos combinados con verdes de temporada."
	},
	{
		id: "ramo-belleza",
		name: "Ramo Belleza",
		category: "ramos",
		priceMin: 30,
		priceMax: 45,
		image: cat_ramos_default,
		description: "Composición romántica en gamas rosadas y blancas."
	},
	{
		id: "ramo-novia",
		name: "Ramo de Novia y decoración de eventos",
		category: "ramos",
		priceMin: 0,
		image: bodas_default,
		description: "Diseño a medida para bodas y eventos: ramo de novia, prendidos, iglesia y espacios. Presupuesto personalizado.",
		badge: "A medida",
		quoteOnly: true
	},
	{
		id: "anthurium",
		name: "Anthurium",
		category: "plantas",
		priceMin: 25,
		image: cat_plantas_default,
		description: "Planta de interior de flor duradera y hoja brillante."
	},
	{
		id: "taza-plantas",
		name: "Taza de Plantas",
		category: "plantas",
		priceMin: 36,
		priceMax: 60,
		image: cat_plantas_default,
		description: "Composición de plantas variadas en taza de cerámica."
	},
	{
		id: "cesta-mimbre",
		name: "Cesta de Mimbre",
		category: "plantas",
		priceMin: 60,
		image: cat_plantas_default,
		description: "Cesta de mimbre natural con plantas de interior surtidas."
	},
	{
		id: "cesta-blanca-mimbre",
		name: "Cesta Blanca de Mimbre",
		category: "plantas",
		priceMin: 45,
		image: cat_plantas_default,
		description: "Mimbre lacado en blanco con composición de plantas."
	},
	{
		id: "banera-ceramica",
		name: "Bañera Cerámica",
		category: "plantas",
		priceMin: 35,
		image: cat_plantas_default,
		description: "Jardinera de cerámica con plantas de interior."
	},
	{
		id: "orquidea-azul",
		name: "Orquídea Azul",
		category: "plantas",
		priceMin: 30,
		image: cat_plantas_default,
		description: "Phalaenopsis teñida en azul, muy decorativa."
	},
	{
		id: "orquidea",
		name: "Orquídea",
		category: "plantas",
		priceMin: 30,
		image: cat_plantas_default,
		description: "Orquídea Phalaenopsis en maceta decorativa."
	},
	{
		id: "denrobium",
		name: "Denrobium",
		category: "plantas",
		priceMin: 28,
		image: cat_plantas_default,
		description: "Orquídea Dendrobium de floración abundante."
	},
	{
		id: "centro-orquideas-variadas",
		name: "Centro de Orquídeas Variadas",
		category: "plantas",
		priceMin: 80,
		image: cat_plantas_default,
		description: "Centro de gran formato con varias orquídeas y verdes.",
		badge: "Premium"
	},
	{
		id: "centro-orquidea-blanca",
		name: "Centro Orquídea Blanca",
		category: "plantas",
		priceMin: 80,
		image: cat_plantas_default,
		description: "Centro elegante de orquídea blanca sobre base natural."
	},
	{
		id: "cesta-rosa",
		name: "Cesta Rosa",
		category: "plantas",
		priceMin: 25,
		image: cat_plantas_default,
		description: "Cesta en tonos rosados con planta de temporada."
	},
	{
		id: "cofre-pirata-blanco",
		name: "Cofre Pirata Blanco",
		category: "plantas",
		priceMin: 58,
		image: cat_plantas_default,
		description: "Cofre de madera blanca con composición floral."
	},
	{
		id: "cajon-floral",
		name: "Cajón Floral",
		category: "plantas",
		priceMin: 30,
		priceMax: 50,
		image: cat_plantas_default,
		description: "Cajón de madera con flor y planta combinadas."
	},
	{
		id: "regadera-madera",
		name: "Regadera Madera",
		category: "plantas",
		priceMin: 45,
		image: cat_plantas_default,
		description: "Regadera decorativa con composición floral."
	},
	{
		id: "cofre-floral",
		name: "Cofre Floral",
		category: "plantas",
		priceMin: 48,
		priceMax: 58,
		image: cat_plantas_default,
		description: "Cofre de madera con flor fresca de temporada."
	},
	{
		id: "gondola",
		name: "Góndola",
		category: "plantas",
		priceMin: 40,
		priceMax: 50,
		image: cat_plantas_default,
		description: "Composición alargada ideal para mesas y recibidores."
	},
	{
		id: "paraiso-floral",
		name: "Paraíso Floral",
		category: "plantas",
		priceMin: 45,
		priceMax: 55,
		image: cat_plantas_default,
		description: "Composición frondosa con flor y verdes variados."
	},
	{
		id: "primavera-floral",
		name: "Primavera Floral",
		category: "plantas",
		priceMin: 45,
		image: cat_plantas_default,
		description: "Colores de primavera en composición sobre base natural."
	},
	{
		id: "caja-mykonos",
		name: "Caja Mykonos",
		category: "plantas",
		priceMin: 50,
		image: cat_plantas_default,
		description: "Caja en blanco y azul con flor de temporada."
	},
	{
		id: "caja-santorini",
		name: "Caja Santorini",
		category: "plantas",
		priceMin: 55,
		image: cat_plantas_default,
		description: "Inspiración mediterránea con flor fresca y verdes."
	},
	{
		id: "bonsai-ficus-ginseng",
		name: "Bonsái Ficus Ginseng",
		category: "plantas",
		priceMin: 25,
		image: cat_plantas_default,
		description: "Bonsái de interior resistente y de fácil cuidado."
	},
	{
		id: "calathea",
		name: "Calathea",
		category: "plantas",
		priceMin: 35,
		image: cat_plantas_default,
		description: "Planta de hoja decorativa para interiores luminosos."
	},
	{
		id: "caja-rosas-eternas",
		name: "Caja de Rosas Eternas",
		category: "rosas-eternas",
		priceMin: 40,
		priceMax: 85,
		image: cat_rosas_eternas_default,
		description: "Rosa natural preservada en caja de regalo. Disponible en varios tamaños.",
		badge: "7-10 años"
	},
	{
		id: "caja-romantica",
		name: "Caja Romántica",
		category: "rosas-eternas",
		priceMin: 45,
		priceMax: 75,
		image: cat_rosas_eternas_default,
		description: "Rosas preservadas con acabado romántico y lazo de satén."
	},
	{
		id: "cupido",
		name: "Cupido",
		category: "rosas-eternas",
		priceMin: 55,
		priceMax: 85,
		image: cat_rosas_eternas_default,
		description: "Corazón de rosas eternas, nuestro diseño más regalado."
	},
	{
		id: "pecera-rosa-eterna",
		name: "Pecera Rosa Eterna",
		category: "rosas-eternas",
		priceMin: 22,
		image: cat_rosas_eternas_default,
		description: "Rosa preservada bajo cúpula de cristal, un detalle perfecto."
	},
	{
		id: "jarron-cristal-1",
		name: "Jarrón de Cristal Nº 1",
		category: "complementos",
		priceMin: 1.5,
		image: cat_complementos_default,
		description: "Jarrón de cristal pequeño para tu ramo."
	},
	{
		id: "jarron-cristal-2",
		name: "Jarrón de Cristal Nº 2",
		category: "complementos",
		priceMin: 5,
		image: cat_complementos_default,
		description: "Jarrón de cristal de mayor tamaño."
	},
	{
		id: "chocolate-belga-pequena",
		name: "Chocolate Belga Caja Pequeña",
		category: "complementos",
		priceMin: 12.5,
		image: cat_complementos_default,
		description: "Bombones belgas surtidos en caja pequeña."
	},
	{
		id: "chocolate-belga-grande",
		name: "Chocolate Belga Caja Grande",
		category: "complementos",
		priceMin: 15,
		image: cat_complementos_default,
		description: "Bombones belgas surtidos en caja grande."
	},
	{
		id: "oso-peluche",
		name: "Oso de Peluche",
		category: "complementos",
		priceMin: 12.5,
		image: cat_complementos_default,
		description: "Osito de peluche suave para acompañar el regalo."
	},
	{
		id: "oso-peluche-corazon",
		name: "Oso de Peluche Corazón",
		category: "complementos",
		priceMin: 12,
		image: cat_complementos_default,
		description: "Osito de peluche con corazón bordado."
	},
	{
		id: "macetero-violeta-orquidea",
		name: "Macetero Violeta Orquídea",
		category: "complementos",
		priceMin: 4.5,
		image: cat_complementos_default,
		description: "Macetero decorativo en tono violeta para orquídea."
	},
	{
		id: "macetero-blanco-orquidea",
		name: "Macetero Blanco Orquídea",
		category: "complementos",
		priceMin: 4.5,
		image: cat_complementos_default,
		description: "Macetero decorativo blanco para orquídea."
	},
	{
		id: "piruletas",
		name: "Piruletas",
		category: "complementos",
		priceMin: 3,
		image: cat_complementos_default,
		description: "Piruletas artesanales de colores."
	}
];
var campaigns = [
	{
		id: "navidad",
		title: "Campaña de Navidad",
		text: "Centros de mesa, coronas y flor de Pascua para toda la casa. Reserva con antelación.",
		dates: "Diciembre"
	},
	{
		id: "san-valentin",
		title: "San Valentín",
		text: "Rosas rojas, cajas de rosas eternas y detalles para el 14 de febrero.",
		dates: "14 de febrero"
	},
	{
		id: "dia-de-la-madre",
		title: "Día de la Madre",
		text: "Ramos, plantas y composiciones especiales con entrega el primer domingo de mayo.",
		dates: "Mayo"
	}
];
function priceTiers(product) {
	if (product.quoteOnly) return [];
	if (product.priceMax === void 0 || product.priceMax === product.priceMin) return [{
		label: "Estándar",
		price: product.priceMin
	}];
	const mid = Math.round((product.priceMin + product.priceMax) / 2 * 2) / 2;
	return [
		{
			label: "Estándar",
			price: product.priceMin
		},
		{
			label: "Especial",
			price: mid
		},
		{
			label: "Premium",
			price: product.priceMax
		}
	];
}
function formatPrice(value) {
	return `${value.toFixed(2).replace(".", ",")} €`;
}
function priceRangeLabel(product) {
	if (product.quoteOnly) return "Presupuesto a medida";
	if (product.priceMax === void 0 || product.priceMax === product.priceMin) return formatPrice(product.priceMin);
	return `${formatPrice(product.priceMin)} – ${formatPrice(product.priceMax)}`;
}
function getLocalProducts() {
	return products;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-ll8Jtdn1.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-DTd6gFQ1.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var company = {
	name: "Pétalos Floristas",
	tagline: "Arte Floral",
	legalName: "Floristería Pétalos Alcalá",
	owner: "Rocío Manjón Cabeza García",
	address: "Calle Navarro y Ledesma 15, 28807 Alcalá de Henares, Madrid",
	phone: "91 882 68 37",
	phoneLink: "+34918826837",
	email: "info@floristeriapetalosalcala.com",
	web: "www.floristeriapetalosalcala.com",
	rating: 4.8,
	reviews: 224
};
var legalNotices = [
	{
		id: "garantia",
		title: "Garantía legal de 24 meses",
		body: "Los productos aptos cuentan con una garantía legal de 24 meses desde su entrega, conforme a la normativa vigente de consumo. Quedan excluidos de esta garantía los productos perecederos, como la flor natural fresca, cuya duración depende de su cuidado y conservación."
	},
	{
		id: "incidencias",
		title: "Incidencias y daños de transporte",
		body: "Dispones de un plazo máximo de 24 horas desde la recepción del pedido para notificar cualquier incidencia o daño de transporte visible. Escríbenos a info@floristeriapetalosalcala.com o llámanos al 91 882 68 37 adjuntando fotografías del producto recibido para poder gestionar la solución lo antes posible."
	},
	{
		id: "desistimiento",
		title: "Derecho de desistimiento",
		body: "Por su naturaleza perecedera, los arreglos florales frescos y las composiciones personalizadas están excluidos del derecho de desistimiento. Esta excepción se aplica a los productos elaborados a medida o que puedan deteriorarse con rapidez."
	},
	{
		id: "pagos",
		title: "Pagos e impuestos",
		body: "Aceptamos tarjeta de crédito y débito (Visa y Mastercard) a través de pasarela segura con cifrado SSL, PayPal y transferencia o ingreso bancario. Todos los precios mostrados incluyen los impuestos (IVA) aplicables."
	}
];
var addOnIds = [
	"jarron-cristal-2",
	"chocolate-belga-pequena",
	"oso-peluche",
	"piruletas"
];
function CartDrawer() {
	const { cartOpen, setCartOpen, lines, setQty, removeLine, total, addLine, clearCart } = useShop();
	const addOns = products.filter((p) => addOnIds.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: cartOpen,
		onOpenChange: setCartOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "right",
			className: "flex w-full flex-col sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
					className: "font-display text-2xl",
					children: "Tu carrito"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Precios con IVA incluido. Entrega propia en la zona." })] }),
				lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-10 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Aún no has añadido flores. Empieza por el catálogo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							onClick: () => setCartOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalogo",
								children: "Ver catálogo"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border/70",
						children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: line.image,
								alt: line.name,
								loading: "lazy",
								width: 80,
								height: 80,
								className: "size-20 shrink-0 rounded-md object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: line.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: line.size
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold text-primary",
										children: formatPrice(line.price)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "icon",
												className: "size-7",
												"aria-label": "Quitar una unidad",
												onClick: () => setQty(line.key, line.qty - 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 text-center text-sm",
												children: line.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "icon",
												className: "size-7",
												"aria-label": "Añadir una unidad",
												onClick: () => setQty(line.key, line.qty + 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												className: "ml-auto size-7 text-muted-foreground",
												"aria-label": "Eliminar del carrito",
												onClick: () => removeLine(line.key),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
											})
										]
									})
								]
							})]
						}, line.key))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "¿Añadimos un detalle?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: addOns.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => addLine({
									productId: p.id,
									name: p.name,
									size: "Estándar",
									price: p.priceMin,
									image: p.image
								}),
								className: "flex items-center justify-between gap-3 rounded-md border border-border/70 bg-card px-3 py-2 text-left text-sm transition-colors hover:border-primary hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 text-muted-foreground",
									children: ["+", formatPrice(p.priceMin)]
								})]
							}, p.id))
						})]
					})]
				}),
				lines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-col gap-3 border-t border-border/70 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full items-center justify-between text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Total (IVA incluido)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: formatPrice(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							className: "w-full",
							onClick: () => {
								toast.success("Pedido reservado", { description: `Te llamamos al ${company.phone} para confirmar fecha de entrega y dedicatoria.` });
								clearCart();
								setCartOpen(false);
							},
							children: "Finalizar pedido"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "w-full",
							onClick: () => setCartOpen(false),
							children: "Seguir comprando"
						})
					]
				})
			]
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var navLinks = [
	{
		to: "/",
		label: "Inicio"
	},
	{
		to: "/catalogo",
		label: "Catálogo"
	},
	{
		to: "/rosas-eternas",
		label: "Rosas Eternas"
	},
	{
		to: "/envios",
		label: "Envíos y Cobertura"
	},
	{
		to: "/sobre-nosotros",
		label: "Sobre Nosotros"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function Navbar() {
	const { count, favorites, setCartOpen } = useShop();
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const results = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (q.length < 2) return [];
		return products.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6);
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open: mobileOpen,
						onOpenChange: setMobileOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "lg:hidden",
								"aria-label": "Abrir menú",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "left",
							className: "w-72",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "font-script text-2xl font-normal",
								children: company.name
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "mt-2 flex flex-col px-4",
								children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									onClick: () => setMobileOpen(false),
									className: "border-b border-border/60 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary",
									activeProps: { className: "text-primary" },
									activeOptions: { exact: link.to === "/" },
									children: link.label
								}, link.to))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0 leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-script text-2xl text-foreground sm:text-3xl",
							children: company.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[0.65rem] tracking-[0.35em] text-muted-foreground uppercase",
							children: company.tagline
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "mr-2 hidden items-center gap-1 lg:flex",
							children: navLinks.slice(1).map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
								activeProps: { className: "text-primary" },
								children: link.label
							}, link.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Buscar",
							onClick: () => setSearchOpen((v) => !v),
							children: searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							asChild: true,
							"aria-label": "Favoritos",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/catalogo",
								search: { favoritos: true },
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5" }), favorites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CounterBadge, { value: favorites.length })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Carrito de compra",
							className: "relative",
							onClick: () => setCartOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CounterBadge, { value: count })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-300", searchOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 py-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Buscar ramos, plantas, rosas eternas…",
							"aria-label": "Buscar productos"
						}),
						results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 divide-y divide-border/70 rounded-lg border border-border/70 bg-card",
							children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/catalogo",
								search: { q: p.name },
								onClick: () => setSearchOpen(false),
								className: "flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-muted-foreground",
									children: priceRangeLabel(p)
								})]
							}) }, p.id))
						}),
						query.trim().length >= 2 && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: [
								"No encontramos ese producto. Llámanos al ",
								company.phone,
								" y lo preparamos a medida."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {})
		]
	});
}
function CounterBadge({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute -top-0.5 -right-0.5 grid size-4.5 min-w-4.5 place-items-center rounded-full bg-primary px-1 text-[0.625rem] font-semibold text-primary-foreground",
		children: value
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function Footer() {
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const active = legalNotices.find((n) => n.id === openId) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-ink-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl",
							children: company.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[0.65rem] tracking-[0.35em] text-ink-muted uppercase",
							children: company.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-ink-muted",
							children: "Floristería familiar en Alcalá de Henares con tres generaciones dedicadas al arte floral."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs text-ink-muted",
							children: ["Titular: ", company.owner]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold tracking-wide text-ink-foreground uppercase",
						children: "Contacto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.address })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${company.phoneLink}`,
									className: "hover:text-ink-foreground",
									children: company.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${company.email}`,
									className: "break-all hover:text-ink-foreground",
									children: company.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.web })]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold tracking-wide text-ink-foreground uppercase",
						children: "Tienda"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalogo",
								className: "hover:text-ink-foreground",
								children: "Catálogo completo"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/rosas-eternas",
								className: "hover:text-ink-foreground",
								children: "Rosas eternas"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/envios",
								className: "hover:text-ink-foreground",
								children: "Envíos y cobertura"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sobre-nosotros",
								className: "hover:text-ink-foreground",
								children: "Sobre nosotros"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contacto",
								className: "hover:text-ink-foreground",
								children: "Bodas y eventos"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold tracking-wide text-ink-foreground uppercase",
							children: "Pago seguro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm text-ink-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 shrink-0 text-primary" }), "Visa y Mastercard · pasarela SSL"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-4 shrink-0 text-primary" }), "PayPal"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-4 shrink-0 text-primary" }), "Transferencia o ingreso bancario"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-ink-muted",
							children: "Impuestos (IVA) incluidos en los precios."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-col items-start gap-2",
							children: legalNotices.map((notice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpenId(notice.id),
								className: "text-left text-xs text-ink-muted underline-offset-4 hover:text-ink-foreground hover:underline",
								children: notice.title
							}, notice.id))
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-ink-muted/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-6 text-xs text-ink-muted sm:px-6",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						company.legalName,
						" · ",
						company.owner
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: active !== null,
				onOpenChange: (open) => !open && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-2xl",
					children: active?.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "pt-2 text-left text-sm leading-relaxed",
					children: active?.body
				})] }) })
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-script text-6xl text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl text-foreground",
					children: "Página no encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "La página que buscas no existe o se ha movido."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Volver al inicio"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl tracking-tight text-foreground",
					children: "Esta página no se ha cargado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Algo ha fallado por nuestra parte. Puedes recargar o volver al inicio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Reintentar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Ir al inicio"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Pétalos Floristas · Arte Floral en Alcalá de Henares" },
			{
				name: "description",
				content: "Floristería familiar en Alcalá de Henares: ramos, plantas, rosas eternas y entrega propia en Madrid y Guadalajara."
			},
			{
				name: "author",
				content: "Floristería Pétalos Alcalá"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Inter:wght@300..700&family=Parisienne&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ShopProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$5 = () => import("./routes-uZugymSk.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Pétalos Floristas · Floristería en Alcalá de Henares" },
		{
			name: "description",
			content: "Tres generaciones de arte floral en Alcalá de Henares. Ramos, plantas, rosas eternas y entrega propia en más de 50 poblaciones."
		},
		{
			property: "og:title",
			content: "Pétalos Floristas · Arte Floral"
		},
		{
			property: "og:description",
			content: "Ramos de temporada, composiciones, rosas eternas y bodas. Floristería familiar en Alcalá de Henares."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./catalogo-FWastTWM.mjs");
var Route$4 = createFileRoute("/catalogo")({
	validateSearch: (search) => ({
		categoria: categories.find((c) => c.id === search["categoria"])?.id ?? void 0,
		q: typeof search["q"] === "string" ? search["q"] : void 0,
		favoritos: search["favoritos"] === true || search["favoritos"] === "true" ? true : void 0
	}),
	head: () => ({ meta: [
		{ title: "Catálogo de flores y plantas · Pétalos Floristas" },
		{
			name: "description",
			content: "Ramos de temporada, plantas, cestas, orquídeas, rosas eternas y complementos con precios actualizados y entrega propia."
		},
		{
			property: "og:title",
			content: "Catálogo · Pétalos Floristas"
		},
		{
			property: "og:description",
			content: "Ramos, plantas, cestas, rosas eternas y complementos de regalo en Alcalá de Henares."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contacto-Djq5n0DO.mjs");
var Route$3 = createFileRoute("/contacto")({
	head: () => ({ meta: [
		{ title: "Contacto, bodas y eventos · Pétalos Floristas" },
		{
			name: "description",
			content: "Floristería en Calle Navarro y Ledesma 15, Alcalá de Henares. Teléfono 91 882 68 37 y formulario para ramos de novia, bodas y eventos."
		},
		{
			property: "og:title",
			content: "Contacto · Pétalos Floristas"
		},
		{
			property: "og:description",
			content: "Escríbenos para tu ramo de novia, decoración de bodas y eventos en Alcalá de Henares."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./envios-CY74J7ej.mjs");
var Route$2 = createFileRoute("/envios")({
	head: () => ({ meta: [
		{ title: "Envíos y cobertura · Pétalos Floristas Alcalá de Henares" },
		{
			name: "description",
			content: "Reparto propio en Alcalá de Henares, Madrid y Guadalajara: consulta las más de 50 poblaciones con servicio de entrega."
		},
		{
			property: "og:title",
			content: "Envíos y cobertura · Pétalos Floristas"
		},
		{
			property: "og:description",
			content: "Busca tu población y comprueba si llegamos con nuestro reparto propio de flores."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./rosas-eternas-DYuMnbJN.mjs");
var Route$1 = createFileRoute("/rosas-eternas")({
	head: () => ({ meta: [
		{ title: "Rosas Eternas · Flor preservada que dura 7-10 años" },
		{
			name: "description",
			content: "Rosas naturales preservadas que duran entre 7 y 10 años sin agua ni luz. Cajas de rosas, Caja Romántica, Cupido y Pecera Rosa Eterna."
		},
		{
			property: "og:title",
			content: "Rosas Eternas · Pétalos Floristas"
		},
		{
			property: "og:description",
			content: "Flor natural preservada, sin agua ni luz, con una duración de 7 a 10 años."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./sobre-nosotros-D6trqZ4W.mjs");
var Route = createFileRoute("/sobre-nosotros")({
	head: () => ({ meta: [
		{ title: "Sobre nosotros · Tres generaciones de arte floral" },
		{
			name: "description",
			content: "La historia de Floristería Pétalos Alcalá: un negocio familiar con tres generaciones dedicadas al arte floral en Alcalá de Henares."
		},
		{
			property: "og:title",
			content: "Sobre nosotros · Pétalos Floristas"
		},
		{
			property: "og:description",
			content: "Negocio familiar en Alcalá de Henares con tres generaciones de experiencia floral."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	CatalogoRoute: Route$4.update({
		id: "/catalogo",
		path: "/catalogo",
		getParentRoute: () => Route$6
	}),
	ContactoRoute: Route$3.update({
		id: "/contacto",
		path: "/contacto",
		getParentRoute: () => Route$6
	}),
	EnviosRoute: Route$2.update({
		id: "/envios",
		path: "/envios",
		getParentRoute: () => Route$6
	}),
	RosasEternasRoute: Route$1.update({
		id: "/rosas-eternas",
		path: "/rosas-eternas",
		getParentRoute: () => Route$6
	}),
	SobreNosotrosRoute: Route.update({
		id: "/sobre-nosotros",
		path: "/sobre-nosotros",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { campaigns as a, formatPrice as c, priceTiers as d, useShop as f, cn as h, company as i, getLocalProducts as l, bodas_default as m, Route$4 as n, cat_rosas_eternas_default as o, Button as p, Input as r, categories as s, router_exports as t, priceRangeLabel as u };
