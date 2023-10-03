export const allTitles = [
  "vite dark-mode",
  "input components",
  "cli",
  "gatsby installation",
  "separator components",
  "table components",
  "form components",
  "hover-card components",
  "textarea components",
  "alert components",
  "remix installation",
  "collapsible components",
  "menubar components",
  "accordion components",
  "laravel installation",
  "date-picker components",
  "data-table components",
  "switch components",
  "calendar components",
  "aspect-ratio components",
  "select components",
  "about",
  "components-json",
  "dark-mode",
  "context-menu components",
  "installation",
  "dialog components",
  "card components",
  "manual installation",
  "command components",
  "next dark-mode",
  "radio-group components",
  "dropdown-menu components",
  "scroll-area components",
  "sheet components",
  "toggle components",
  "navigation-menu components",
  "button components",
  "combobox components",
  "astro installation",
  "alert-dialog components",
  "slider components",
  "tabs components",
  "toast components",
  "vite installation",
  "badge components",
  "figma",
  "next installation",
  "progress components",
  "typography components",
  "theming",
  "avatar components",
  "checkbox components",
  "popover components",
  "skeleton components",
  "label components",
  "summary",
  "tooltip components",
  "changelog",
];
export const data = [
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/remix",
      title: "remix installation",
    },
    pageContent:
      "Docs\n\nRemix\n\nRemix\n\nInstall and configure Remix.\n\nCreate project\n\nStart by creating a new Remix project using create-remix:\n\nnpx create-remix@latest my-app\n\nCopy\n\nRun the CLI\n\nRun the shadcn-ui init command to setup your project:\n\nnpx shadcn-ui@latest init\n\nCopy\n\nConfigure components.json\n\nYou will be asked a few questions to configure components.json:\n\nWould you like to use TypeScript (recommended)? no / yes\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a app/tailwind.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.js",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/remix",
      title: "remix installation",
    },
    pageContent:
      "Configure the import alias for components: \u203a ~/components\n\nConfigure the import alias for utils: \u203a ~/lib/utils\n\nAre you using React Server Components? \u203a no\n\nCopy\n\nApp structure\n\nNote: This app structure is only a suggestion. You can place the files wherever you want.\n\nPlace the UI components in the app/components/ui folder.\n\nYour own components can be placed in the app/components folder.\n\nThe app/lib folder contains all the utility functions. We have a utils.ts where we define the cn helper.\n\nThe app/tailwind.css file contains the global CSS.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/remix",
      title: "remix installation",
    },
    pageContent:
      'Install Tailwind CSS\n\nnpm\n\nadd\n\nD\n\ntailwindcss@latest\n\nautoprefixer@latest\n\nCopy\n\nThen we create a postcss.config.js file:\n\nmodule\n\nexports\n\nplugins: {\n\ntailwindcss: {},\n\nautoprefixer: {},\n\n},\n\nCopy\n\nAnd finally we add the following to our remix.config.js file:\n\n/**\n\n@type\n\nimport(\'@remix-run/dev\').AppConfig\n\n/\n\nmodule\n\nexports\n\n...\n\ntailwind: true,\n\npostcss: true,\n\n...\n\n};\n\nCopy\n\nAdd tailwind.css to your app\n\nIn your app/root.tsx file, import the tailwind.css file:\n\nimport styles from "./tailwind.css"\n\nexport\n\nconst\n\nlinks\n\nLinksFunction\n\n()\n\n=>\n\nrel\n\n"stylesheet"\n\nhref\n\nstyles\n\n},\n\n...(',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/remix",
      title: "remix installation",
    },
    pageContent:
      'cssBundleHref\n\n[{\n\nrel\n\n"stylesheet"\n\nhref\n\ncssBundleHref\n\n}]\n\n[]),\n\nCopy\n\nThat\'s it\n\nYou can now start adding components to your project.\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbutton\n\nCopy\n\nThe command above will add the Button component to your project. You can then import it like this:\n\nimport\n\nButton\n\nfrom\n\n"~/components/ui/button"\n\nexport\n\ndefault\n\nfunction\n\nHome\n\n()\n\nreturn (\n\n<div>\n\nButton\n\nClick me\n\n</\n\nButton\n\n</div>\n\nCopy\n\nVite\n\nGatsby',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/progress",
      title: "progress components",
    },
    pageContent:
      'Docs\n\nProgress\n\nProgress\n\nDisplays an indicator showing the completion progress of a task, typically displayed as a progress bar.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nprogress\n\nCopy\n\nUsage\n\nimport\n\nProgress\n\nfrom\n\n"@/components/ui/progress"\n\nCopy\n\n<Progress value={33} />\n\nCopy\n\nPopover\n\nRadio Group',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/accordion",
      title: "accordion components",
    },
    pageContent:
      'Docs\n\nAccordion\n\nAccordion\n\nA vertically stacked set of interactive headings that each reveal a section of content.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nIs it accessible?\n\nIs it styled?\n\nIs it animated?\n\nInstallation\n\nRun the following command:\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\naccordion\n\nCopy\n\nUpdate tailwind.config.js\n\nAdd the following animations to your tailwind.config.js file:\n\ntailwind.config.js\n\n/**\n\n@type\n\nimport(\'tailwindcss\').Config\n\n/\n\nmodule\n\nexports\n\ntheme: {\n\nextend: {\n\nkeyframes: {\n\n"accordion-down": {\n\nfrom\n\nheight\n\n},\n\nto\n\nheight\n\n"var(--radix-accordion-content-height)"\n\n},\n\n},',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/accordion",
      title: "accordion components",
    },
    pageContent:
      '"accordion-up": {\n\nfrom\n\nheight\n\n"var(--radix-accordion-content-height)"\n\n},\n\nto\n\nheight\n\n},\n\n},\n\n},\n\nanimation: {\n\n"accordion-down"\n\n"accordion-down 0.2s ease-out"\n\n"accordion-up"\n\n"accordion-up 0.2s ease-out"\n\n},\n\n},\n\n},\n\nCopy\n\nUsage\n\nimport {\n\nAccordion,\n\nAccordionContent,\n\nAccordionItem,\n\nAccordionTrigger,\n\n} from "@/components/ui/accordion"\n\nCopy\n\nAccordion type\n\n"single"\n\ncollapsible\n\nAccordionItem value\n\n"item-1"\n\nAccordionTrigger\n\nIs it accessible?\n\n</\n\nAccordionTrigger\n\n<AccordionContent>\n\nYes. It adheres to the WAI-ARIA design pattern.\n\n</AccordionContent>\n\n</AccordionItem>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/accordion",
      title: "accordion components",
    },
    pageContent: "</Accordion>\n\nCopy\n\nVite\n\nAlert",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation",
      title: "installation",
    },
    pageContent:
      'Docs\n\nInstallation\n\nInstallation\n\nHow to install dependencies and structure your app.\n\nFrameworks\n\nNext.jsNext.js\n\nViteVite\n\nRemixRemix\n\nGatsbyGatsby\n\nAstroAstro\n\nLaravel\n\nReactManual\n\nTypeScript\n\nThis project and the components are written in TypeScript. We recommend using TypeScript for your project as well.\n\nHowever we provide a JavaScript version of the components as well. The JavaScript version is available via the cli.\n\nTo opt-out of TypeScript, you can use the tsx flag in your components.json file.\n\ncomponents.json\n\nstyle\n\n"default"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation",
      title: "installation",
    },
    pageContent:
      'tailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"src/app/globals.css"\n\nbaseColor\n\n"zinc"\n\ncssVariables\n\ntrue\n\n},\n\nrsc\n\nfalse,\n\ntsx\n\nfalse,\n\naliases\n\nutils\n\n"~/lib/utils"\n\ncomponents\n\n"~/components"\n\nCopy\n\nTo configure import aliases, you can use the following jsconfig.json:\n\njsconfig.json\n\ncompilerOptions\n\npaths\n\n@/*\n\n"./*"\n\nCopy\n\nIntroduction\n\ncomponents.json',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/typography",
      title: "typography components",
    },
    pageContent:
      "Docs\n\nTypography\n\nTypography\n\nStyles for headings, paragraphs, lists...etc\n\nStyle:\n\nThe Joke Tax Chronicles\n\nOnce upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.\n\nThe King's Plan\n\nThe king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the kingdom.\n\nThe Joke Tax\n\nThe king's subjects were not amused. They grumbled and complained, but the king was firm:\n\n1st level of puns: 5 gold coins\n\n2nd level of jokes: 10 gold coins\n\n3rd level of one-liners : 20 gold coins\n\nAs a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/typography",
      title: "typography components",
    },
    pageContent:
      "Jokester's Revolt\n\nJokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.\n\nAnd then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.\n\nThe People's Rebellion\n\nThe people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/typography",
      title: "typography components",
    },
    pageContent: "Empty Overflowing Modest Satisfied Full Ecstatic",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/typography",
      title: "typography components",
    },
    pageContent:
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.\n\nThe moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.\n\nh1\n\nStyle:\n\nTaxing Laughter: The Joke Tax Chronicles\n\nh2\n\nStyle:\n\nThe People of the Kingdom\n\nh3\n\nStyle:\n\nThe Joke Tax\n\nh4\n\nStyle:\n\nPeople stopped telling jokes\n\nStyle:\n\nThe king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/typography",
      title: "typography components",
    },
    pageContent: "blockquote\n\nStyle:\n\ntable\n\nStyle:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/typography",
      title: "typography components",
    },
    pageContent: "Empty Overflowing Modest Satisfied Full Ecstatic",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/typography",
      title: "typography components",
    },
    pageContent:
      "list\n\nStyle:\n\n1st level of puns: 5 gold coins\n\n2nd level of jokes: 10 gold coins\n\n3rd level of one-liners : 20 gold coins\n\nInline code\n\nStyle:\n\nLead\n\nStyle:\n\nA modal dialog that interrupts the user with important content and expects a response.\n\nLarge\n\nStyle:\n\nAre you sure absolutely sure?\n\nSmall\n\nStyle:\n\nMuted\n\nStyle:\n\nEnter your email address.\n\nCLI\n\nFigma",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/badge",
      title: "badge components",
    },
    pageContent:
      'Docs\n\nBadge\n\nBadge\n\nDisplays a badge or a component that looks like a badge.\n\nStyle:\n\nBadge\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbadge\n\nCopy\n\nUsage\n\nimport\n\nBadge\n\nfrom\n\n"@/components/ui/badge"\n\nCopy\n\nBadge variant\n\n"outline"\n\nBadge\n\n</\n\nBadge\n\nCopy\n\nLink\n\nYou can use the badgeVariants helper to create a link that looks like a badge.\n\nimport\n\nbadgeVariants\n\nfrom\n\n"@/components/ui/badge"\n\nCopy\n\nLink className\n\n={\n\nbadgeVariants\n\n({\n\nvariant\n\n"outline"\n\n})}>\n\nBadge\n\n</\n\nLink\n\nCopy\n\nExamples\n\nDefault\n\nStyle:\n\nBadge\n\nSecondary\n\nStyle:\n\nSecondary\n\nOutline\n\nStyle:\n\nOutline\n\nDestructive\n\nStyle:\n\nDestructive',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/badge",
      title: "badge components",
    },
    pageContent: "Avatar\n\nButton",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/collapsible",
      title: "collapsible components",
    },
    pageContent:
      'Docs\n\nCollapsible\n\nCollapsible\n\nAn interactive component which expands/collapses a panel.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\n@peduarte starred 3 repositories\n\nToggle\n\n@radix-ui/primitives\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ncollapsible\n\nCopy\n\nUsage\n\nimport {\n\nCollapsible,\n\nCollapsibleContent,\n\nCollapsibleTrigger,\n\n} from "@/components/ui/collapsible"\n\nCopy\n\n<Collapsible>\n\nCollapsibleTrigger\n\nCan I use this in my project?\n\n</\n\nCollapsibleTrigger\n\n<CollapsibleContent>\n\nYes. Free to use for personal and commercial projects. No attribution\n\nrequired.\n\n</CollapsibleContent>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/collapsible",
      title: "collapsible components",
    },
    pageContent: "</Collapsible>\n\nCopy\n\nCheckbox\n\nCombobox",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/theming",
      title: "theming",
    },
    pageContent:
      'Docs\n\nTheming\n\nTheming\n\nUsing CSS Variables or Tailwind CSS for theming.\n\nYou can choose between using CSS variables or Tailwind CSS utility classes for theming.\n\nUtility classes\n\ndiv className\n\nbg-zinc-950\n\ndark:bg-white\n\n/>\n\nCopy\n\nTo use utility classes for theming set tailwind.cssVariables to false in your components.json file.\n\ncomponents.json\n\nstyle\n\n"default"\n\nrsc\n\ntrue,\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"app/globals.css"\n\nbaseColor\n\n"slate"\n\ncssVariables\n\nfalse\n\n},\n\naliases\n\ncomponents\n\n"@/components"\n\nutils\n\n"@/lib/utils"\n\nCopy\n\nCSS Variables',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/theming",
      title: "theming",
    },
    pageContent:
      'div className\n\nbg-background\n\ntext-foreground\n\n/>\n\nCopy\n\nTo use CSS variables for theming set tailwind.cssVariables to true in your components.json file.\n\ncomponents.json\n\nstyle\n\n"default"\n\nrsc\n\ntrue,\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"app/globals.css"\n\nbaseColor\n\n"slate"\n\ncssVariables\n\ntrue\n\n},\n\naliases\n\ncomponents\n\n"@/components"\n\nutils\n\n"@/lib/utils"\n\nCopy\n\nConvention\n\nWe use a simple background and foreground convention for colors. The background variable is used for the background color of the component and the foreground variable is used for the text color.\n\nThe background suffix is omitted when the variable is used for the background color of the component.\n\nGiven the following CSS variables:\n\n--primary: 222.2 47.4% 11.2%;',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/theming",
      title: "theming",
    },
    pageContent:
      '--primary-foreground: 210 40% 98%;\n\nCopy\n\nThe background color of the following component will be hsl(var(--primary)) and the foreground color will be hsl(var(--primary-foreground)).\n\ndiv className\n\n"bg-primary text-primary-foreground"\n\nHello\n\n</\n\ndiv\n\nCopy\n\nCSS variables must be defined without color space function. See the Tailwind CSS documentation for more information.\n\nList of variables\n\nHere\'s the list of variables available for customization:\n\nDefault background color of <body />...etc\n\n--background: 0 0% 100%;\n\n--foreground: 222.2 47.4% 11.2%;',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/theming",
      title: "theming",
    },
    pageContent:
      "Copy\n\nMuted backgrounds such as <TabsList />, <Skeleton /> and <Switch />\n\n--muted: 210 40% 96.1%;\n\n--muted-foreground: 215.4 16.3% 46.9%;\n\nCopy\n\nBackground color for <Card />\n\n--card: 0 0% 100%;\n\n--card-foreground: 222.2 47.4% 11.2%;\n\nCopy\n\nBackground color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />\n\n--popover: 0 0% 100%;\n\n--popover-foreground: 222.2 47.4% 11.2%;\n\nCopy\n\nDefault border color\n\n--border: 214.3 31.8% 91.4%;\n\nCopy\n\nBorder color for inputs such as <Input />, <Select />, <Textarea />\n\n--input: 214.3 31.8% 91.4%;",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/theming",
      title: "theming",
    },
    pageContent:
      'Copy\n\nPrimary colors for <Button />\n\n--primary: 222.2 47.4% 11.2%;\n\n--primary-foreground: 210 40% 98%;\n\nCopy\n\nSecondary colors for <Button />\n\n--secondary: 210 40% 96.1%;\n\n--secondary-foreground: 222.2 47.4% 11.2%;\n\nCopy\n\nUsed for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc\n\n--accent: 210 40% 96.1%;\n\n--accent-foreground: 222.2 47.4% 11.2%;\n\nCopy\n\nUsed for destructive actions such as <Button variant="destructive">\n\n--destructive: 0 100% 50%;\n\n--destructive-foreground: 210 40% 98%;\n\nCopy\n\nUsed for focus ring\n\n--ring: 215 20.2% 65.1%;',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/theming",
      title: "theming",
    },
    pageContent:
      'Copy\n\nBorder radius for card, input and buttons\n\n--radius: 0.5rem;\n\nCopy\n\nAdding new colors\n\nTo add new colors, you need to add them to your CSS file and to your tailwind.config.js file.\n\napp/globals.css\n\n:root {\n\n--warning\n\n38\n\n92%\n\n50%;\n\n--warning-foreground\n\n48\n\n96%\n\n89%;\n\n.dark {\n\n--warning\n\n48\n\n96%\n\n89%;\n\n--warning-foreground\n\n38\n\n92%\n\n50%;\n\nCopy\n\ntailwind.config.js\n\nmodule\n\nexports\n\ntheme: {\n\nextend: {\n\ncolors: {\n\nwarning: "hsl(var(--warning))",\n\n"warning-foreground"\n\n"hsl(var(--warning-foreground))"\n\n},\n\n},\n\n},\n\nCopy\n\nYou can now use the warning utility class in your components.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/theming",
      title: "theming",
    },
    pageContent:
      "div className\n\nbg-warning\n\ntext-warning-foreground\n\n/>\n\nCopy\n\nOther color formats\n\nI recommend using HSL colors for theming but you can also use other color formats if you prefer.\n\nSee the Tailwind CSS documentation for more information on using rgb, rgba or hsl colors.\n\ncomponents.json\n\nDark mode",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/dialog",
      title: "dialog components",
    },
    pageContent:
      'Docs\n\nDialog\n\nDialog\n\nA window overlaid on either the primary window or another dialog window, rendering the content underneath inert.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ndialog\n\nCopy\n\nUsage\n\nimport {\n\nDialog,\n\nDialogContent,\n\nDialogDescription,\n\nDialogHeader,\n\nDialogTitle,\n\nDialogTrigger,\n\n} from "@/components/ui/dialog"\n\nCopy\n\n<Dialog>\n\nDialogTrigger\n\nOpen\n\n</\n\nDialogTrigger\n\n<DialogContent>\n\n<DialogHeader>\n\nDialogTitle\n\nAre you sure absolutely sure?\n\n</\n\nDialogTitle\n\n<DialogDescription>\n\nThis action cannot be undone. This will permanently delete your account\n\nand remove your data from our servers.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/dialog",
      title: "dialog components",
    },
    pageContent:
      "</DialogDescription>\n\n</DialogHeader>\n\n</DialogContent>\n\n</Dialog>\n\nCopy\n\nNotes\n\nhere.\n\n<Dialog>\n\n<ContextMenu>\n\nContextMenuTrigger\n\nRight click\n\n</\n\nContextMenuTrigger\n\n<ContextMenuContent>\n\nContextMenuItem\n\nOpen\n\n</\n\nContextMenuItem\n\nContextMenuItem\n\nDownload\n\n</\n\nContextMenuItem\n\n<DialogTrigger asChild>\n\n<ContextMenuItem>\n\nspan\n\nDelete\n\n</\n\nspan\n\n</ContextMenuItem>\n\n</DialogTrigger>\n\n</ContextMenuContent>\n\n</ContextMenu>\n\n<DialogContent>\n\n<DialogHeader>\n\nDialogTitle\n\nAre you sure absolutely sure?\n\n</\n\nDialogTitle\n\n<DialogDescription>\n\nThis action cannot be undone. Are you sure you want to permanently\n\ndelete this file from our servers?",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/dialog",
      title: "dialog components",
    },
    pageContent:
      '</DialogDescription>\n\n</DialogHeader>\n\n<DialogFooter>\n\nButton type\n\n"submit"\n\nConfirm\n\n</\n\nButton\n\n</DialogFooter>\n\n</DialogContent>\n\n</Dialog>\n\nCopy\n\nDate Picker\n\nDropdown Menu',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode/vite",
      title: "vite dark-mode",
    },
    pageContent:
      'Docs\n\nVite\n\nVite\n\nAdding dark mode to your vite app.\n\nDark mode\n\nCreate a theme provider\n\ncomponents/theme-provider.tsx\n\nimport\n\ncreateContext\n\nuseContext\n\nuseEffect\n\nuseState\n\nfrom\n\n"react"\n\ntype\n\nTheme\n\n"dark"\n\n"light"\n\n"system"\n\ntype\n\nThemeProviderProps\n\nchildren\n\nReact\n\nReactNode\n\ndefaultTheme?: Theme\n\nstorageKey?: string\n\ntype\n\nThemeProviderState\n\ntheme: Theme\n\nsetTheme\n\ntheme\n\nTheme\n\n=>\n\nvoid\n\nconst\n\ninitialState\n\nThemeProviderState\n\ntheme: "system",\n\nsetTheme\n\n()\n\n=>\n\nnull,\n\nconst\n\nThemeProviderContext\n\ncreateContext\n\nThemeProviderState\n\n>(\n\ninitialState\n\nexport\n\nfunction\n\nThemeProvider\n\n({\n\nchildren,\n\ndefaultTheme = "system",\n\nstorageKey = "vite-ui-theme",',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode/vite",
      title: "vite dark-mode",
    },
    pageContent:
      '...props\n\n}:\n\nThemeProviderProps\n\nconst\n\ntheme\n\nsetTheme\n\nuseState\n\nTheme\n\n>(\n\n()\n\n=>\n\nlocalStorage\n\ngetItem\n\nstorageKey\n\nas\n\nTheme\n\n||\n\ndefaultTheme\n\nuseEffect\n\n(()\n\n=>\n\nconst\n\nroot\n\nwindow\n\ndocument\n\ndocumentElement\n\nroot\n\nclassList\n\nremove\n\n"light"\n\n"dark"\n\nif\n\ntheme\n\n===\n\n"system"\n\nconst\n\nsystemTheme\n\nwindow\n\nmatchMedia\n\n"(prefers-color-scheme: dark)"\n\n.matches\n\n? "dark"\n\n: "light"\n\nroot\n\nclassList\n\nadd\n\nsystemTheme\n\nreturn\n\nroot\n\nclassList\n\nadd\n\ntheme\n\n},\n\ntheme\n\n])\n\nconst\n\nvalue\n\ntheme,\n\nsetTheme\n\ntheme\n\nTheme\n\n=>\n\nlocalStorage\n\nsetItem\n\nstorageKey\n\ntheme\n\nsetTheme(theme)\n\n},\n\nreturn (\n\nThemeProviderContext.Provider\n\n{...\n\nprops\n\nvalue\n\n={',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode/vite",
      title: "vite dark-mode",
    },
    pageContent:
      'value\n\n}>\n\n{children}\n\n</ThemeProviderContext.Provider>\n\nexport\n\nconst\n\nuseTheme\n\n()\n\n=>\n\nconst\n\ncontext\n\nuseContext\n\nThemeProviderContext\n\nif\n\ncontext\n\n===\n\nundefined)\n\nthrow\n\nnew\n\nError\n\n"useTheme must be used within a ThemeProvider"\n\nreturn context\n\nCopy\n\nWrap your root layout\n\nAdd the ThemeProvider to your root layout.\n\nApp.tsx\n\nimport\n\nThemeProvider\n\nfrom\n\n"@/components/theme-provider"\n\nfunction\n\nApp\n\n()\n\nreturn (\n\nThemeProvider defaultTheme\n\n"dark"\n\nstorageKey\n\n"vite-ui-theme"\n\n{children}\n\n</ThemeProvider>\n\nexport default App\n\nCopy\n\nAdd a mode toggle\n\nPlace a mode toggle on your site to toggle between light and dark mode.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode/vite",
      title: "vite dark-mode",
    },
    pageContent:
      'components/mode-toggle.tsx\n\nimport\n\nMoon\n\nSun\n\nfrom\n\n"lucide-react"\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nimport {\n\nDropdownMenu,\n\nDropdownMenuContent,\n\nDropdownMenuItem,\n\nDropdownMenuTrigger,\n\n} from "@/components/ui/dropdown-menu"\n\nimport\n\nuseTheme\n\nfrom\n\n"@/components/theme-provider"\n\nexport\n\nfunction\n\nModeToggle\n\n()\n\nconst\n\nsetTheme\n\nuseTheme\n\n()\n\nreturn (\n\n<DropdownMenu>\n\n<DropdownMenuTrigger asChild>\n\nButton variant\n\n"outline"\n\nsize\n\n"icon"\n\nSun className\n\n"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"\n\n/>\n\nMoon className',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode/vite",
      title: "vite dark-mode",
    },
    pageContent:
      '"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"\n\n/>\n\nspan className\n\n"sr-only"\n\nToggle theme\n\n</\n\nspan\n\n</Button>\n\n</DropdownMenuTrigger>\n\nDropdownMenuContent align\n\n"end"\n\nDropdownMenuItem onClick\n\n={()\n\n=>\n\nsetTheme\n\n"light"\n\n)}>\n\nLight\n\n</DropdownMenuItem>\n\nDropdownMenuItem onClick\n\n={()\n\n=>\n\nsetTheme\n\n"dark"\n\n)}>\n\nDark\n\n</DropdownMenuItem>\n\nDropdownMenuItem onClick\n\n={()\n\n=>\n\nsetTheme\n\n"system"\n\n)}>\n\nSystem\n\n</DropdownMenuItem>\n\n</DropdownMenuContent>\n\n</DropdownMenu>\n\nCopy\n\nNext.js\n\nAccordion',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent:
      "Docs\n\nReact Hook Form\n\nReact Hook Form\n\nBuilding forms with React Hook Form and Zod.\n\nForms are tricky. They are one of the most common things you'll build in a web application, but also one of the most complex.\n\nWell-designed HTML forms are:\n\nWell-structured and semantically correct.\n\nEasy to use and navigate (keyboard).\n\nAccessible with ARIA attributes and proper labels.\n\nHas support for client and server side validation.\n\nWell-styled and consistent with the rest of the application.\n\nIn this guide, we will take a look at building forms with react-hook-form and zod. We're going to use a <FormField> component to compose accessible forms using Radix UI components.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent:
      "Features\n\nThe <Form /> component is a wrapper around the react-hook-form library. It provides a few things:\n\nComposable components for building forms.\n\nA <FormField /> component for building controlled form fields.\n\nForm validation using zod.\n\nHandles accessibility and error messages.\n\nUses React.useId() for generating unique IDs.\n\nApplies the correct aria attributes to form fields based on states.\n\nBuilt to work with all Radix UI components.\n\nBring your own schema library. We use zod but you can use anything you want.\n\nYou have full control over the markup and styling.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent:
      'Anatomy\n\n<Form>\n\n<FormField\n\ncontrol={...}\n\nname="..."\n\nrender\n\n={()\n\n=>\n\n<FormItem>\n\n<FormLabel />\n\n<FormControl>\n\n/*\n\nYour form field\n\n/\n\n</FormControl>\n\n<FormDescription />\n\n<FormMessage />\n\n</FormItem>\n\n)}\n\n/>\n\n</Form>\n\nCopy\n\nExample\n\nconst form = useForm()\n\n<FormField\n\ncontrol\n\n={\n\nform\n\ncontrol\n\nname="username"\n\nrender\n\n={({\n\nfield\n\n})\n\n=>\n\n<FormItem>\n\nFormLabel\n\nUsername\n\n</\n\nFormLabel\n\n<FormControl>\n\nInput placeholder\n\n"shadcn"\n\n{...\n\nfield\n\n/>\n\n</FormControl>\n\nFormDescription\n\nThis is your public display name.\n\n</\n\nFormDescription\n\n<FormMessage />\n\n</FormItem>\n\n)}\n\n/>\n\nCopy\n\nInstallation\n\nCommand\n\nnpx',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent:
      'shadcn-ui@latest\n\nadd\n\nform\n\nCopy\n\nUsage\n\nCreate a form schema\n\nDefine the shape of your form using a Zod schema. You can read more about using Zod in the Zod documentation.\n\n"use client"\n\nimport\n\nas\n\nfrom\n\n"zod"\n\nconst\n\nformSchema\n\nobject\n\n({\n\nusername\n\nstring\n\n().\n\nmin\n\n(2).\n\nmax\n\n(50),\n\n})\n\nCopy\n\nDefine a form\n\nUse the useForm hook from react-hook-form to create a form.\n\n"use client"\n\nimport\n\nzodResolver\n\nfrom\n\n"@hookform/resolvers/zod"\n\nimport\n\nas\n\nfrom\n\n"zod"\n\nconst\n\nformSchema\n\nobject\n\n({\n\nusername\n\nstring\n\n().\n\nmin\n\n(2,\n\nmessage: "Username must be at least 2 characters.",\n\n}),\n\n})\n\nexport',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent:
      'function\n\nProfileForm\n\n()\n\n// 1. Define your form.\n\nconst\n\nform\n\nuseForm\n\ninfer\n\n<typeof\n\nformSchema\n\n>>({\n\nresolver\n\nzodResolver\n\nformSchema\n\n),\n\ndefaultValues: {\n\nusername: "",\n\n},\n\n})\n\n// 2. Define a submit handler.\n\nfunction\n\nonSubmit\n\nvalues\n\ninfer\n\n<typeof\n\nformSchema\n\n>)\n\n// Do something with the form values.\n\n// \u2705 This will be type-safe and validated.\n\nconsole\n\nlog\n\nvalues\n\nCopy\n\nSince FormField is using a controlled component, you need to provide a default value for the field. See the React Hook Form docs to learn more about controlled components.\n\nBuild your form\n\nWe can now use the <Form /> components to build our form.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent:
      '"use client"\n\nimport\n\nzodResolver\n\nfrom\n\n"@hookform/resolvers/zod"\n\nimport\n\nas\n\nfrom\n\n"zod"\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nimport {\n\nForm,\n\nFormControl,\n\nFormDescription,\n\nFormField,\n\nFormItem,\n\nFormLabel,\n\nFormMessage,\n\n} from "@/components/ui/form"\n\nimport\n\nInput\n\nfrom\n\n"@/components/ui/input"\n\nconst\n\nformSchema\n\nobject\n\n({\n\nusername\n\nstring\n\n().\n\nmin\n\n(2,\n\nmessage: "Username must be at least 2 characters.",\n\n}),\n\n})\n\nexport\n\nfunction\n\nProfileForm\n\n()\n\n// ...\n\nreturn (\n\nForm\n\n{...\n\nform\n\n}>\n\nform onSubmit\n\n={\n\nform\n\nhandleSubmit\n\nonSubmit\n\n)}\n\nclassName\n\n"space-y-8"\n\n<FormField\n\ncontrol\n\n={',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent:
      'form\n\ncontrol\n\nname="username"\n\nrender\n\n={({\n\nfield\n\n})\n\n=>\n\n<FormItem>\n\nFormLabel\n\nUsername\n\n</\n\nFormLabel\n\n<FormControl>\n\nInput placeholder\n\n"shadcn"\n\n{...\n\nfield\n\n/>\n\n</FormControl>\n\n<FormDescription>\n\nThis is your public display name.\n\n</FormDescription>\n\n<FormMessage />\n\n</FormItem>\n\n)}\n\n/>\n\nButton type\n\n"submit"\n\nSubmit\n\n</\n\nButton\n\n</form>\n\n</Form>\n\nCopy\n\nDone\n\nThat\'s it. You now have a fully accessible form that is type-safe with client-side validation.\n\nStyle:\n\nThis is your public display name.\n\nExamples\n\nSee the following links for more examples on how to use the <Form /> component with other components:\n\nCheckbox\n\nDate Picker\n\nInput\n\nRadio Group\n\nSelect\n\nSwitch\n\nTextarea\n\nCombobox',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/form",
      title: "form components",
    },
    pageContent: "Dropdown Menu\n\nHover Card",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/laravel",
      title: "laravel installation",
    },
    pageContent:
      "Docs\n\nLaravel\n\nLaravel\n\nInstall and configure Laravel with Inertia\n\nCreate project\n\nStart by creating a new Laravel project with Inertia and React using the laravel installer laravel new my-app:\n\nlaravel\n\nnew\n\nmy-app\n\n--typescript\n\n--breeze\n\n--stack=react\n\n--git\n\n--no-interaction\n\nCopy\n\nRun the CLI\n\nRun the shadcn-ui init command to setup your project:\n\nnpx shadcn-ui@latest init\n\nCopy\n\nConfigure components.json\n\nYou will be asked a few questions to configure components.json:\n\nWould you like to use TypeScript (recommended)? no / yes\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a resources/css/app.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.js",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/laravel",
      title: "laravel installation",
    },
    pageContent:
      'Configure the import alias for components: \u203a @/Components\n\nConfigure the import alias for utils: \u203a @/lib/utils\n\nAre you using React Server Components? \u203a no / yes\n\nCopy\n\nUpdate tailwind.config.js\n\nThe shadcn-ui CLI will automatically overwrite your tailwind.config.js. Update it to look like this:\n\nimport forms from "@tailwindcss/forms"\n\nimport defaultTheme from "tailwindcss/defaultTheme"\n\n/**\n\n@type\n\nimport(\'tailwindcss\').Config\n\n/\n\nexport default {\n\ndarkMode: "class",\n\ncontent: [\n\n"./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",\n\n"./storage/framework/views/*.php",\n\n"./resources/views/**/*.blade.php",\n\n"./resources/js/**/*.tsx",\n\n],',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/laravel",
      title: "laravel installation",
    },
    pageContent:
      'theme: {\n\ncontainer: {\n\ncenter: true,\n\npadding: "2rem",\n\nscreens: {\n\n"2xl"\n\n"1400px"\n\n},\n\n},\n\nextend: {\n\ncolors: {\n\nborder: "hsl(var(--border))",\n\ninput: "hsl(var(--input))",\n\nring: "hsl(var(--ring))",\n\nbackground: "hsl(var(--background))",\n\nforeground: "hsl(var(--foreground))",\n\nprimary: {\n\nDEFAULT: "hsl(var(--primary))",\n\nforeground: "hsl(var(--primary-foreground))",\n\n},\n\nsecondary: {\n\nDEFAULT: "hsl(var(--secondary))",\n\nforeground: "hsl(var(--secondary-foreground))",\n\n},\n\ndestructive: {\n\nDEFAULT: "hsl(var(--destructive))",\n\nforeground: "hsl(var(--destructive-foreground))",\n\n},\n\nmuted: {\n\nDEFAULT: "hsl(var(--muted))",\n\nforeground: "hsl(var(--muted-foreground))",\n\n},',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/laravel",
      title: "laravel installation",
    },
    pageContent:
      'accent: {\n\nDEFAULT: "hsl(var(--accent))",\n\nforeground: "hsl(var(--accent-foreground))",\n\n},\n\npopover: {\n\nDEFAULT: "hsl(var(--popover))",\n\nforeground: "hsl(var(--popover-foreground))",\n\n},\n\ncard: {\n\nDEFAULT: "hsl(var(--card))",\n\nforeground: "hsl(var(--card-foreground))",\n\n},\n\n},\n\nborderRadius: {\n\nlg: `var(--radius)`,\n\nmd: `calc(var(--radius) - 2px)`,\n\nsm: "calc(var(--radius) - 4px)",\n\n},\n\nfontFamily: {\n\nsans\n\n"Figtree"\n\n...\n\ndefaultTheme\n\nfontFamily\n\nsans\n\n],\n\n},\n\nkeyframes: {\n\n"accordion-down": {\n\nfrom\n\nheight\n\n},\n\nto\n\nheight\n\n"var(--radix-accordion-content-height)"\n\n},\n\n},',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/laravel",
      title: "laravel installation",
    },
    pageContent:
      '"accordion-up": {\n\nfrom\n\nheight\n\n"var(--radix-accordion-content-height)"\n\n},\n\nto\n\nheight\n\n},\n\n},\n\n},\n\nanimation: {\n\n"accordion-down"\n\n"accordion-down 0.2s ease-out"\n\n"accordion-up"\n\n"accordion-up 0.2s ease-out"\n\n},\n\n},\n\n},\n\nplugins\n\nforms\n\nrequire\n\n"tailwindcss-animate"\n\n)],\n\nCopy\n\nThat\'s it\n\nYou can now start adding components to your project.\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbutton\n\nCopy\n\nThe command above will add the Button component to your project. You can then import it like this:\n\nimport\n\nButton\n\nfrom\n\n"@/Components/ui/button"\n\nexport\n\ndefault\n\nfunction\n\nHome\n\n()\n\nreturn (',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/laravel",
      title: "laravel installation",
    },
    pageContent:
      "<div>\n\nButton\n\nClick me\n\n</\n\nButton\n\n</div>\n\nCopy\n\nAstro\n\nManual",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/separator",
      title: "separator components",
    },
    pageContent:
      'Docs\n\nSeparator\n\nSeparator\n\nVisually or semantically separates content.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nRadix Primitives\n\nAn open-source UI component library.\n\nBlog\n\nDocs\n\nSource\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nseparator\n\nCopy\n\nUsage\n\nimport\n\nSeparator\n\nfrom\n\n"@/components/ui/separator"\n\nCopy\n\n<Separator />\n\nCopy\n\nSelect\n\nSheet',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/button",
      title: "button components",
    },
    pageContent:
      'Docs\n\nButton\n\nButton\n\nDisplays a button or a component that looks like a button.\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbutton\n\nCopy\n\nUsage\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nCopy\n\nButton variant\n\n"outline"\n\nButton\n\n</\n\nButton\n\nCopy\n\nLink\n\nYou can use the buttonVariants helper to create a link that looks like a button.\n\nimport\n\nbuttonVariants\n\nfrom\n\n"@/components/ui/button"\n\nCopy\n\nLink className\n\n={\n\nbuttonVariants\n\n({\n\nvariant\n\n"outline"\n\n})}>\n\nClick here\n\n</\n\nLink\n\nCopy\n\nAlternatively, you can set the asChild parameter and nest the link component.\n\n<Button asChild>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/button",
      title: "button components",
    },
    pageContent:
      'Link href\n\n"/login"\n\nLogin\n\n</\n\nLink\n\n</Button>\n\nCopy\n\nExamples\n\nPrimary\n\nStyle:\n\nSecondary\n\nStyle:\n\nDestructive\n\nStyle:\n\nOutline\n\nStyle:\n\nGhost\n\nStyle:\n\nLink\n\nStyle:\n\nIcon\n\nStyle:\n\nWith Icon\n\nStyle:\n\nLoading\n\nStyle:\n\nAs Child\n\nStyle:\n\nLogin\n\nBadge\n\nCalendar',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/tabs",
      title: "tabs components",
    },
    pageContent:
      'Docs\n\nTabs\n\nTabs\n\nA set of layered sections of content\u2014known as tab panels\u2014that are displayed one at a time.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nAccount\n\nMake changes to your account here. Click save when you\'re done.\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ntabs\n\nCopy\n\nUsage\n\nimport\n\nTabs\n\nTabsContent\n\nTabsList\n\nTabsTrigger\n\nfrom\n\n"@/components/ui/tabs"\n\nCopy\n\nTabs defaultValue\n\n"account"\n\nclassName\n\n"w-[400px]"\n\n<TabsList>\n\nTabsTrigger value\n\n"account"\n\nAccount\n\n</\n\nTabsTrigger\n\nTabsTrigger value\n\n"password"\n\nPassword\n\n</\n\nTabsTrigger\n\n</TabsList>\n\nTabsContent value\n\n"account"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/tabs",
      title: "tabs components",
    },
    pageContent:
      'Make changes to your account here.\n\n</\n\nTabsContent\n\nTabsContent value\n\n"password"\n\nChange your password here.\n\n</\n\nTabsContent\n\n</Tabs>\n\nCopy\n\nTable\n\nTextarea',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/card",
      title: "card components",
    },
    pageContent:
      'Docs\n\nCard\n\nCard\n\nDisplays a card with header, content, and footer.\n\nStyle:\n\nCreate project\n\nDeploy your new project in one-click.\n\nSelect\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ncard\n\nCopy\n\nUsage\n\nimport {\n\nCard,\n\nCardContent,\n\nCardDescription,\n\nCardFooter,\n\nCardHeader,\n\nCardTitle,\n\n} from "@/components/ui/card"\n\nCopy\n\n<Card>\n\n<CardHeader>\n\nCardTitle\n\nCard Title\n\n</\n\nCardTitle\n\nCardDescription\n\nCard Description\n\n</\n\nCardDescription\n\n</CardHeader>\n\n<CardContent>\n\nCard Content\n\n</\n\n</CardContent>\n\n<CardFooter>\n\nCard Footer\n\n</\n\n</CardFooter>\n\n</Card>\n\nCopy\n\nExamples\n\nStyle:\n\nNotifications\n\nYou have 3 unread messages.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/card",
      title: "card components",
    },
    pageContent:
      "Push Notifications\n\nSend notifications to device.\n\nYour call has been confirmed.\n\n1 hour ago\n\nYou have a new message!\n\n1 hour ago\n\nYour subscription is expiring soon!\n\n2 hours ago\n\nCalendar\n\nCheckbox",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/next",
      title: "next installation",
    },
    pageContent:
      "Docs\n\nNext.js\n\nNext.js\n\nInstall and configure Next.js.\n\nCreate project\n\nStart by creating a new Next.js project using create-next-app:\n\nnpx\n\ncreate-next-app@latest\n\nmy-app\n\n--typescript\n\n--tailwind\n\n--eslint\n\nCopy\n\nRun the CLI\n\nRun the shadcn-ui init command to setup your project:\n\nnpx shadcn-ui@latest init\n\nCopy\n\nConfigure components.json\n\nYou will be asked a few questions to configure components.json:\n\nWould you like to use TypeScript (recommended)? no / yes\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a \u203a app/globals.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.js",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/next",
      title: "next installation",
    },
    pageContent:
      "Configure the import alias for components: \u203a @/components\n\nConfigure the import alias for utils: \u203a @/lib/utils\n\nAre you using React Server Components? \u203a no / yes\n\nCopy\n\nApp structure\n\nHere's how I structure my Next.js apps. You can use this as a reference:\n\n\u251c\u2500\u2500 app\n\n\u2502   \u251c\u2500\u2500 layout.tsx\n\n\u2502   \u2514\u2500\u2500 page.tsx\n\n\u251c\u2500\u2500 components\n\n\u2502   \u251c\u2500\u2500 ui\n\n\u2502   \u2502   \u251c\u2500\u2500 alert-dialog.tsx\n\n\u2502   \u2502   \u251c\u2500\u2500 button.tsx\n\n\u2502   \u2502   \u251c\u2500\u2500 dropdown-menu.tsx\n\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\n\u2502   \u251c\u2500\u2500 main-nav.tsx\n\n\u2502   \u251c\u2500\u2500 page-header.tsx\n\n\u2502   \u2514\u2500\u2500 ...\n\n\u251c\u2500\u2500 lib\n\n\u2502   \u2514\u2500\u2500 utils.ts\n\n\u251c\u2500\u2500 styles\n\n\u2502   \u2514\u2500\u2500 globals.css",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/next",
      title: "next installation",
    },
    pageContent:
      "\u251c\u2500\u2500 next.config.js\n\n\u251c\u2500\u2500 package.json\n\n\u251c\u2500\u2500 postcss.config.js\n\n\u251c\u2500\u2500 tailwind.config.js\n\n\u2514\u2500\u2500 tsconfig.json\n\nCopy\n\nI place the UI components in the components/ui folder.\n\nThe rest of the components such as <PageHeader /> and <MainNav /> are placed in the components folder.\n\nThe lib folder contains all the utility functions. I have a utils.ts where I define the cn helper.\n\nThe styles folder contains the global CSS.\n\nThat's it\n\nYou can now start adding components to your project.\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbutton\n\nCopy\n\nThe command above will add the Button component to your project. You can then import it like this:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/next",
      title: "next installation",
    },
    pageContent:
      'import\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nexport\n\ndefault\n\nfunction\n\nHome\n\n()\n\nreturn (\n\n<div>\n\nButton\n\nClick me\n\n</\n\nButton\n\n</div>\n\nCopy\n\nAbout\n\nVite',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/switch",
      title: "switch components",
    },
    pageContent:
      'Docs\n\nSwitch\n\nSwitch\n\nA control that allows the user to toggle between checked and not checked.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nswitch\n\nCopy\n\nUsage\n\nimport\n\nSwitch\n\nfrom\n\n"@/components/ui/switch"\n\nCopy\n\n<Switch />\n\nCopy\n\nExamples\n\nForm\n\nStyle:\n\nEmail Notifications\n\nReceive emails about new products, features, and more.\n\nReceive emails about your account security.\n\nSlider\n\nTable',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/command",
      title: "command components",
    },
    pageContent:
      'Docs\n\nCommand\n\nCommand\n\nFast, composable, unstyled command menu for React.\n\nStyle:\n\nSuggestions\n\nCalendar\n\nSearch Emoji\n\nCalculator\n\nSettings\n\nProfile\n\n\u2318P\n\nBilling\n\n\u2318B\n\nSettings\n\n\u2318S\n\nAbout\n\nThe <Command /> component uses the cmdk component by pacocoursey.\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ncommand\n\nCopy\n\nUsage\n\nimport {\n\nCommand,\n\nCommandDialog,\n\nCommandEmpty,\n\nCommandGroup,\n\nCommandInput,\n\nCommandItem,\n\nCommandList,\n\nCommandSeparator,\n\nCommandShortcut,\n\n} from "@/components/ui/command"\n\nCopy\n\n<Command>\n\nCommandInput placeholder\n\n"Type a command or search..."\n\n/>\n\n<CommandList>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/command",
      title: "command components",
    },
    pageContent:
      'CommandEmpty\n\nNo results found.\n\n</\n\nCommandEmpty\n\nCommandGroup heading\n\n"Suggestions"\n\nCommandItem\n\nCalendar\n\n</\n\nCommandItem\n\nCommandItem\n\nSearch Emoji\n\n</\n\nCommandItem\n\nCommandItem\n\nCalculator\n\n</\n\nCommandItem\n\n</CommandGroup>\n\n<CommandSeparator />\n\nCommandGroup heading\n\n"Settings"\n\nCommandItem\n\nProfile\n\n</\n\nCommandItem\n\nCommandItem\n\nBilling\n\n</\n\nCommandItem\n\nCommandItem\n\nSettings\n\n</\n\nCommandItem\n\n</CommandGroup>\n\n</CommandList>\n\n</Command>\n\nCopy\n\nExamples\n\nDialog\n\nStyle:\n\nPress \u2318J\n\nTo show the command menu in a dialog, use the <CommandDialog /> component.\n\nexport\n\nfunction\n\nCommandMenu\n\n()',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/command",
      title: "command components",
    },
    pageContent:
      'const\n\nopen\n\nsetOpen\n\nReact\n\nuseState\n\n(false)\n\nReact\n\nuseEffect\n\n(()\n\n=>\n\nconst\n\ndown\n\nKeyboardEvent\n\n=>\n\nif\n\nkey\n\n===\n\n"k"\n\n&&\n\nmetaKey\n\n||\n\nctrlKey\n\n))\n\ne.preventDefault()\n\nsetOpen\n\n((\n\nopen\n\n=>\n\nopen\n\ndocument\n\naddEventListener\n\n"keydown"\n\ndown\n\nreturn\n\n()\n\n=>\n\ndocument\n\nremoveEventListener\n\n"keydown"\n\ndown\n\n}, [])\n\nreturn (\n\nCommandDialog open\n\n={\n\nopen\n\nonOpenChange\n\n={\n\nsetOpen\n\n}>\n\nCommandInput placeholder\n\n"Type a command or search..."\n\n/>\n\n<CommandList>\n\nCommandEmpty\n\nNo results found.\n\n</\n\nCommandEmpty\n\nCommandGroup heading\n\n"Suggestions"\n\nCommandItem\n\nCalendar\n\n</\n\nCommandItem\n\nCommandItem\n\nSearch Emoji\n\n</\n\nCommandItem',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/command",
      title: "command components",
    },
    pageContent:
      "CommandItem\n\nCalculator\n\n</\n\nCommandItem\n\n</CommandGroup>\n\n</CommandList>\n\n</CommandDialog>\n\nCopy\n\nCombobox\n\nYou can use the <Command /> component as a combobox. See the Combobox page for more information.\n\nCombobox\n\nContext Menu",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode",
      title: "dark-mode",
    },
    pageContent:
      "Docs\n\nDark Mode\n\nDark Mode\n\nAdding dark mode to your site.\n\nNext.jsNext.js\n\nViteVite\n\nOther frameworks\n\nI'm looking for help writing guides for other frameworks. Help me write guides for Remix, Astro and Vite by opening an PR.\n\nTheming\n\nCLI",
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs/cli", title: "cli" },
    pageContent:
      "Docs\n\nCLI\n\nCLI\n\nUse the CLI to add components to your project.\n\ninit\n\nUse the init command to initialize configuration and dependencies for a new project.\n\nThe init command installs dependencies, adds the cn util, configures tailwind.config.js, and CSS variables for the project.\n\nnpx shadcn-ui@latest init\n\nCopy\n\nYou will be asked a few questions to configure components.json:\n\nWould you like to use TypeScript (recommended)? no/yes\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a \u203a app/globals.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.js",
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs/cli", title: "cli" },
    pageContent:
      "Configure the import alias for components: \u203a @/components\n\nConfigure the import alias for utils: \u203a @/lib/utils\n\nAre you using React Server Components? \u203a no / yes\n\nCopy\n\nOptions\n\nUsage: shadcn-ui init [options]\n\ninitialize your project and install dependencies\n\nOptions:\n\ny, --yes        skip confirmation prompt. (default: false)\n\nc, --cwd <cwd>  the working directory. defaults to the current directory.\n\nh, --help       display help for command\n\nCopy\n\nadd\n\nUse the add command to add components and dependencies to your project.",
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs/cli", title: "cli" },
    pageContent:
      "npx\n\nshadcn-ui@latest\n\nadd\n\ncomponent\n\nCopy\n\nYou will be presented with a list of components to choose from:\n\nWhich components would you like to add? \u203a Space to select. A to toggle all.\n\nEnter to submit.\n\n\u25ef  accordion\n\n\u25ef  alert\n\n\u25ef  alert-dialog\n\n\u25ef  aspect-ratio\n\n\u25ef  avatar\n\n\u25ef  badge\n\n\u25ef  button\n\n\u25ef  calendar\n\n\u25ef  card\n\n\u25ef  checkbox\n\nCopy\n\nOptions\n\nUsage: shadcn-ui add [options] [components...]\n\nadd a component to your project\n\nArguments:\n\ncomponents         the components to add\n\nOptions:\n\ny, --yes          skip confirmation prompt. (default: false)\n\no, --overwrite    overwrite existing files. (default: false)\n\nc, --cwd <cwd>    the working directory. defaults to the current directory.\n\np, --path <path>  the path to add the component to.\n\nh, --help         display help for command",
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs/cli", title: "cli" },
    pageContent:
      'Copy\n\ndiff (experimental)\n\nYou can use the diff command to check for updates against the registry.\n\nRun the following command to get a list of components that have updates available:\n\nnpx shadcn-ui diff\n\nCopy\n\nThe following components have updates available:\n\nalert\n\n/path/to/my-app/components/ui/alert.tsx\n\nbutton\n\n/path/to/my-app/components/ui/button.tsx\n\ntoast\n\n/path/to/my-app/components/ui/use-toast.ts\n\n/path/to/my-app/components/ui/toaster.tsx\n\nCopy\n\nThen run diff [component] to see the changes:\n\nnpx\n\nshadcn-ui\n\ndiff\n\nalert\n\nCopy\n\nconst alertVariants = cva(\n\n"relative w-full rounded-lg border",',
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs/cli", title: "cli" },
    pageContent:
      '+ "relative w-full pl-12 rounded-lg border"\n\nCopy\n\nOptions\n\nUsage: shadcn-ui diff [options] [component]\n\ncheck for updates against the registry\n\nArguments:\n\ncomponent        the component name\n\nOptions:\n\ny, --yes        skip confirmation prompt. (default: false)\n\nc, --cwd <cwd>  the working directory. defaults to the current directory.\n\nh, --help       display help for command\n\nCopy\n\nDark mode\n\nTypography',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/date-picker",
      title: "date-picker components",
    },
    pageContent:
      'Docs\n\nDate Picker\n\nDate Picker\n\nA date picker component with range and presets.\n\nStyle:\n\nPick a date\n\nInstallation\n\nThe Date Picker is built using a composition of the <Popover /> and the <Calendar /> components.\n\nSee installation instructions for the Popover and the Calendar components.\n\nUsage\n\n"use client"\n\nimport\n\nas\n\nReact\n\nfrom\n\n"react"\n\nimport\n\nformat\n\nfrom\n\n"date-fns"\n\nimport\n\nCalendar\n\nas\n\nCalendarIcon\n\nfrom\n\n"lucide-react"\n\nimport\n\ncn\n\nfrom\n\n"@/lib/utils"\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nimport\n\nCalendar\n\nfrom\n\n"@/components/ui/calendar"\n\nimport {\n\nPopover,\n\nPopoverContent,\n\nPopoverTrigger,',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/date-picker",
      title: "date-picker components",
    },
    pageContent:
      '} from "@/components/ui/popover"\n\nexport\n\nfunction\n\nDatePickerDemo\n\n()\n\nconst\n\ndate\n\nsetDate\n\nReact\n\nuseState\n\nDate\n\n>()\n\nreturn (\n\n<Popover>\n\n<PopoverTrigger asChild>\n\n<Button\n\nvariant={"outline"}\n\nclassName={cn(\n\n"w-[280px] justify-start text-left font-normal",\n\ndate\n\n&&\n\n"text-muted-foreground"\n\n)}\n\nCalendarIcon className\n\n"mr-2 h-4 w-4"\n\n/>\n\ndate\n\nformat\n\ndate\n\n"PPP"\n\nspan\n\nPick a date\n\n</\n\nspan\n\n>}\n\n</Button>\n\n</PopoverTrigger>\n\nPopoverContent className\n\n"w-auto p-0"\n\n<Calendar\n\nmode="single"\n\nselected={date}\n\nonSelect={setDate}\n\ninitialFocus\n\n/>\n\n</PopoverContent>\n\n</Popover>\n\nCopy\n\nSee the React DayPicker documentation for more information.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/date-picker",
      title: "date-picker components",
    },
    pageContent:
      "Examples\n\nDate Picker\n\nStyle:\n\nPick a date\n\nDate Range Picker\n\nStyle:\n\nWith Presets\n\nStyle:\n\nPick a date\n\nForm\n\nStyle:\n\nPick a date\n\nYour date of birth is used to calculate your age.\n\nData Table\n\nDialog",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/menubar",
      title: "menubar components",
    },
    pageContent:
      'Docs\n\nMenubar\n\nMenubar\n\nA visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nmenubar\n\nCopy\n\nUsage\n\nimport {\n\nMenubar,\n\nMenubarContent,\n\nMenubarItem,\n\nMenubarMenu,\n\nMenubarSeparator,\n\nMenubarShortcut,\n\nMenubarTrigger,\n\n} from "@/components/ui/menubar"\n\nCopy\n\n<Menubar>\n\n<MenubarMenu>\n\nMenubarTrigger\n\nFile\n\n</\n\nMenubarTrigger\n\n<MenubarContent>\n\n<MenubarItem>\n\nNew Tab\n\nMenubarShortcut\n\n\u2318T\n\n</\n\nMenubarShortcut\n\n</MenubarItem>\n\nMenubarItem',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/menubar",
      title: "menubar components",
    },
    pageContent:
      "New Window\n\n</\n\nMenubarItem\n\n<MenubarSeparator />\n\nMenubarItem\n\nShare\n\n</\n\nMenubarItem\n\n<MenubarSeparator />\n\nMenubarItem\n\nPrint\n\n</\n\nMenubarItem\n\n</MenubarContent>\n\n</MenubarMenu>\n\n</Menubar>\n\nCopy\n\nLabel\n\nNavigation Menu",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      "Docs\n\nManual Installation\n\nManual Installation\n\nAdd dependencies to your project manually.\n\nAdd Tailwind CSS\n\nComponents are styled using Tailwind CSS. You need to install Tailwind CSS in your project.\n\nFollow the Tailwind CSS installation instructions to get started.\n\nAdd dependencies\n\nAdd the following dependencies to your project:\n\nnpm\n\ninstall\n\ntailwindcss-animate\n\nclass-variance-authority\n\nclsx\n\ntailwind-merge\n\nCopy\n\nAdd icon library\n\nIf you're using the default style, install lucide-react:\n\nnpm install lucide-react\n\nCopy\n\nIf you're using the new-york style, install @radix-ui/react-icons:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      'npm install @radix-ui/react-icons\n\nCopy\n\nConfigure path aliases\n\nI use the @ alias. This is how I configure it in tsconfig.json:\n\ntsconfig.json\n\ncompilerOptions\n\nbaseUrl\n\n"."\n\npaths\n\n@/*\n\n"./*"\n\nCopy\n\nThe @ alias is a preference. You can use other aliases if you want.\n\nIf you use a different alias such as ~, you\'ll need to update import statements when adding components.\n\nConfigure tailwind.config.js\n\nHere\'s what my tailwind.config.js file looks like:\n\ntailwind.config.js\n\nconst\n\nfontFamily\n\nrequire\n\n"tailwindcss/defaultTheme"\n\n/**\n\n@type\n\nimport(\'tailwindcss\').Config\n\n/',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      'module\n\nexports\n\ndarkMode\n\n"class"\n\n],\n\ncontent\n\n"app/**/*.{ts,tsx}"\n\n"components/**/*.{ts,tsx}"\n\n],\n\ntheme: {\n\ncontainer: {\n\ncenter: true,\n\npadding: "2rem",\n\nscreens: {\n\n"2xl"\n\n"1400px"\n\n},\n\n},\n\nextend: {\n\ncolors: {\n\nborder: "hsl(var(--border))",\n\ninput: "hsl(var(--input))",\n\nring: "hsl(var(--ring))",\n\nbackground: "hsl(var(--background))",\n\nforeground: "hsl(var(--foreground))",\n\nprimary: {\n\nDEFAULT: "hsl(var(--primary))",\n\nforeground: "hsl(var(--primary-foreground))",\n\n},\n\nsecondary: {\n\nDEFAULT: "hsl(var(--secondary))",\n\nforeground: "hsl(var(--secondary-foreground))",\n\n},',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      'destructive: {\n\nDEFAULT: "hsl(var(--destructive))",\n\nforeground: "hsl(var(--destructive-foreground))",\n\n},\n\nmuted: {\n\nDEFAULT: "hsl(var(--muted))",\n\nforeground: "hsl(var(--muted-foreground))",\n\n},\n\naccent: {\n\nDEFAULT: "hsl(var(--accent))",\n\nforeground: "hsl(var(--accent-foreground))",\n\n},\n\npopover: {\n\nDEFAULT: "hsl(var(--popover))",\n\nforeground: "hsl(var(--popover-foreground))",\n\n},\n\ncard: {\n\nDEFAULT: "hsl(var(--card))",\n\nforeground: "hsl(var(--card-foreground))",\n\n},\n\n},\n\nborderRadius: {\n\nlg: `var(--radius)`,\n\nmd: `calc(var(--radius) - 2px)`,\n\nsm: "calc(var(--radius) - 4px)",\n\n},',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      'fontFamily: {\n\nsans\n\n"var(--font-sans)"\n\n...\n\nfontFamily\n\nsans\n\n],\n\n},\n\nkeyframes: {\n\n"accordion-down": {\n\nfrom\n\nheight\n\n},\n\nto\n\nheight\n\n"var(--radix-accordion-content-height)"\n\n},\n\n},\n\n"accordion-up": {\n\nfrom\n\nheight\n\n"var(--radix-accordion-content-height)"\n\n},\n\nto\n\nheight\n\n},\n\n},\n\n},\n\nanimation: {\n\n"accordion-down"\n\n"accordion-down 0.2s ease-out"\n\n"accordion-up"\n\n"accordion-up 0.2s ease-out"\n\n},\n\n},\n\n},\n\nplugins\n\nrequire\n\n"tailwindcss-animate"\n\n)],\n\nCopy\n\nConfigure styles\n\nAdd the following to your styles/globals.css file. You can learn more about using CSS variables for theming in the theming section.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      "globals.css\n\n@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n\n@layer base {\n\n:root {\n\n--background\n\n0%\n\n100%;\n\n--foreground\n\n222.2\n\n47.4%\n\n11.2%;\n\n--muted\n\n210\n\n40%\n\n96.1%;\n\n--muted-foreground\n\n215.4\n\n16.3%\n\n46.9%;\n\n--popover\n\n0%\n\n100%;\n\n--popover-foreground\n\n222.2\n\n47.4%\n\n11.2%;\n\n--border\n\n214.3\n\n31.8%\n\n91.4%;\n\n--input\n\n214.3\n\n31.8%\n\n91.4%;\n\n--card\n\n0%\n\n100%;\n\n--card-foreground\n\n222.2\n\n47.4%\n\n11.2%;\n\n--primary\n\n222.2\n\n47.4%\n\n11.2%;\n\n--primary-foreground\n\n210\n\n40%\n\n98%;\n\n--secondary\n\n210\n\n40%\n\n96.1%;\n\n--secondary-foreground\n\n222.2\n\n47.4%\n\n11.2%;\n\n--accent\n\n210\n\n40%\n\n96.1%;\n\n--accent-foreground\n\n222.2\n\n47.4%\n\n11.2%;",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      "--destructive\n\n100%\n\n50%;\n\n--destructive-foreground\n\n210\n\n40%\n\n98%;\n\n--ring\n\n215\n\n20.2%\n\n65.1%;\n\n--radius: 0.5rem;\n\n.dark {\n\n--background\n\n224\n\n71%\n\n4%;\n\n--foreground\n\n213\n\n31%\n\n91%;\n\n--muted\n\n223\n\n47%\n\n11%;\n\n--muted-foreground\n\n215.4\n\n16.3%\n\n56.9%;\n\n--accent\n\n216\n\n34%\n\n17%;\n\n--accent-foreground\n\n210\n\n40%\n\n98%;\n\n--popover\n\n224\n\n71%\n\n4%;\n\n--popover-foreground\n\n215\n\n20.2%\n\n65.1%;\n\n--border\n\n216\n\n34%\n\n17%;\n\n--input\n\n216\n\n34%\n\n17%;\n\n--card\n\n224\n\n71%\n\n4%;\n\n--card-foreground\n\n213\n\n31%\n\n91%;\n\n--primary\n\n210\n\n40%\n\n98%;\n\n--primary-foreground\n\n222.2\n\n47.4%\n\n1.2%;\n\n--secondary\n\n222.2\n\n47.4%\n\n11.2%;\n\n--secondary-foreground\n\n210\n\n40%\n\n98%;\n\n--destructive\n\n63%\n\n31%;",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent:
      '--destructive-foreground\n\n210\n\n40%\n\n98%;\n\n--ring\n\n216\n\n34%\n\n17%;\n\n--radius: 0.5rem;\n\n@layer base {\n\n{\n\n@apply border-border;\n\nbody {\n\n@apply bg-background text-foreground;\n\nfont-feature-settings\n\n"rlig"\n\n1,\n\n"calt"\n\n1;\n\nCopy\n\nAdd a cn helper\n\nI use a cn helper to make it easier to conditionally add Tailwind CSS classes. Here\'s how I define it in lib/utils.ts:\n\nlib/utils.ts\n\nimport\n\nclsx\n\ntype\n\nClassValue\n\nfrom\n\n"clsx"\n\nimport\n\ntwMerge\n\nfrom\n\n"tailwind-merge"\n\nexport\n\nfunction\n\ncn\n\n(...\n\ninputs\n\nClassValue\n\n[])\n\nreturn\n\ntwMerge\n\nclsx\n\ninputs\n\n))\n\nCopy\n\nThat\'s it\n\nYou can now start adding components to your project.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/manual",
      title: "manual installation",
    },
    pageContent: "Laravel\n\nNext.js",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/calendar",
      title: "calendar components",
    },
    pageContent:
      "Docs\n\nCalendar\n\nCalendar\n\nA date field component that allows users to enter and edit date.\n\nStyle:\n\nSeptember 2023",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/calendar",
      title: "calendar components",
    },
    pageContent:
      "27 28 29 30 31 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/calendar",
      title: "calendar components",
    },
    pageContent:
      'About\n\nThe Calendar component is built on top of React DayPicker.\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ncalendar\n\nCopy\n\nUsage\n\nimport\n\nCalendar\n\nfrom\n\n"@/components/ui/calendar"\n\nCopy\n\nconst\n\ndate\n\nsetDate\n\nReact\n\nuseState\n\nDate\n\nundefined\n\n>(new\n\nDate\n\n())\n\nreturn (\n\n<Calendar\n\nmode="single"\n\nselected={date}\n\nonSelect={setDate}\n\nclassName="rounded-md border"\n\n/>\n\nCopy\n\nSee the React DayPicker documentation for more information.\n\nDate Picker\n\nYou can use the <Calendar> component to build a date picker. See the Date Picker page for more information.\n\nExamples\n\nForm',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/calendar",
      title: "calendar components",
    },
    pageContent:
      "Style:\n\nPick a date\n\nYour date of birth is used to calculate your age.\n\nButton\n\nCard",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/aspect-ratio",
      title: "aspect-ratio components",
    },
    pageContent:
      'Docs\n\nAspect Ratio\n\nAspect Ratio\n\nDisplays content within a desired ratio.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\naspect-ratio\n\nCopy\n\nUsage\n\nimport Image from "next/image"\n\nimport\n\nAspectRatio\n\nfrom\n\n"@/components/ui/aspect-ratio"\n\nCopy\n\n<div className="w-[450px]">\n\nAspectRatio ratio\n\n={16\n\n9}>\n\nImage src\n\n"..."\n\nalt\n\n"Image"\n\nclassName\n\n"rounded-md object-cover"\n\n/>\n\n</AspectRatio>\n\n</div>\n\nCopy\n\nAlert Dialog\n\nAvatar',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/label",
      title: "label components",
    },
    pageContent:
      'Docs\n\nLabel\n\nLabel\n\nRenders an accessible label associated with controls.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nlabel\n\nCopy\n\nUsage\n\nimport\n\nLabel\n\nfrom\n\n"@/components/ui/label"\n\nCopy\n\nLabel htmlFor\n\n"email"\n\nYour email address\n\n</\n\nLabel\n\nCopy\n\nInput\n\nMenubar',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/tooltip",
      title: "tooltip components",
    },
    pageContent:
      'Docs\n\nTooltip\n\nTooltip\n\nA popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ntooltip\n\nCopy\n\nUsage\n\nimport {\n\nTooltip,\n\nTooltipContent,\n\nTooltipProvider,\n\nTooltipTrigger,\n\n} from "@/components/ui/tooltip"\n\nCopy\n\n<TooltipProvider>\n\n<Tooltip>\n\nTooltipTrigger\n\nHover\n\n</\n\nTooltipTrigger\n\n<TooltipContent>\n\nAdd to library\n\n</\n\n</TooltipContent>\n\n</Tooltip>\n\n</TooltipProvider>\n\nCopy\n\nToggle',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/table",
      title: "table components",
    },
    pageContent:
      "Docs\n\nTable\n\nTable\n\nA responsive table component.\n\nStyle:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/table",
      title: "table components",
    },
    pageContent:
      "INV001 Paid Credit Card $250.00 INV002 Pending PayPal $150.00 INV003 Unpaid Bank Transfer $350.00 INV004 Paid Credit Card $450.00 INV005 Paid PayPal $550.00 INV006 Pending Bank Transfer $200.00 INV007 Unpaid Credit Card $300.00",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/table",
      title: "table components",
    },
    pageContent:
      'Installation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ntable\n\nCopy\n\nUsage\n\nimport {\n\nTable,\n\nTableBody,\n\nTableCaption,\n\nTableCell,\n\nTableHead,\n\nTableHeader,\n\nTableRow,\n\n} from "@/components/ui/table"\n\nCopy\n\n<Table>\n\nTableCaption\n\nA list of your recent invoices.\n\n</\n\nTableCaption\n\n<TableHeader>\n\n<TableRow>\n\nTableHead className\n\n"w-[100px]"\n\nInvoice\n\n</\n\nTableHead\n\nTableHead\n\nStatus\n\n</\n\nTableHead\n\nTableHead\n\nMethod\n\n</\n\nTableHead\n\nTableHead className\n\n"text-right"\n\nAmount\n\n</\n\nTableHead\n\n</TableRow>\n\n</TableHeader>\n\n<TableBody>\n\n<TableRow>\n\nTableCell className\n\n"font-medium"\n\nINV001\n\n</\n\nTableCell\n\nTableCell\n\nPaid\n\n</',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/table",
      title: "table components",
    },
    pageContent:
      'TableCell\n\nTableCell\n\nCredit Card\n\n</\n\nTableCell\n\nTableCell className\n\n"text-right"\n\n$250.00\n\n</\n\nTableCell\n\n</TableRow>\n\n</TableBody>\n\n</Table>\n\nCopy\n\nData Table\n\nYou can use the <Table /> component to build more complex data tables. Combine it with @tanstack/react-table to create tables with sorting, filtering and pagination.\n\nSee the Data Table documentation for more information.\n\nYou can also see an example of a data table in the Tasks demo.\n\nSwitch\n\nTabs',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode/next",
      title: "next dark-mode",
    },
    pageContent:
      'Docs\n\nNext.js\n\nNext.js\n\nAdding dark mode to your next app.\n\nDark mode\n\nInstall next-themes\n\nStart by installing next-themes:\n\nnpm install next-themes\n\nCopy\n\nCreate a theme provider\n\ncomponents/theme-provider.tsx\n\n"use client"\n\nimport\n\nas\n\nReact\n\nfrom\n\n"react"\n\nimport\n\nThemeProvider\n\nas\n\nNextThemesProvider\n\nfrom\n\n"next-themes"\n\nimport\n\ntype\n\nThemeProviderProps\n\nfrom\n\n"next-themes/dist/types"\n\nexport\n\nfunction\n\nThemeProvider\n\n({\n\nchildren\n\n...\n\nprops\n\n}:\n\nThemeProviderProps\n\nreturn\n\nNextThemesProvider\n\n{...\n\nprops\n\n}>{\n\nchildren\n\n}</\n\nNextThemesProvider\n\nCopy\n\nWrap your root layout\n\nAdd the ThemeProvider to your root layout.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/dark-mode/next",
      title: "next dark-mode",
    },
    pageContent:
      'app/layout.tsx\n\nimport\n\nThemeProvider\n\nfrom\n\n"@/components/theme-provider"\n\nexport\n\ndefault\n\nfunction\n\nRootLayout\n\n({\n\nchildren\n\n}:\n\nRootLayoutProps\n\nreturn (\n\n<>\n\nhtml lang\n\n"en"\n\nsuppressHydrationWarning\n\n<head />\n\n<body>\n\n<ThemeProvider\n\nattribute="class"\n\ndefaultTheme="system"\n\nenableSystem\n\ndisableTransitionOnChange\n\n{children}\n\n</ThemeProvider>\n\n</body>\n\n</html>\n\n</>\n\nCopy\n\nAdd a mode toggle\n\nPlace a mode toggle on your site to toggle between light and dark mode.\n\nStyle:\n\nToggle theme\n\nManual\n\nVite',
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs/about", title: "about" },
    pageContent:
      "Docs\n\nAbout\n\nAbout\n\nPowered by amazing open source projects.\n\nAbout\n\nui.shadcn.com is a project by shadcn.\n\nCredits\n\nRadix UI - For the primitives.\n\nVercel - Where I host all my projects.\n\nShu Ding - The typography style is adapted from his work on Nextra.\n\nCal - Where I copied the styles for the first component: the Button.\n\ncmdk - For the <Command /> component.\n\nLicense\n\nMIT \u00a9 shadcn\n\nChangelog\n\nNext.js",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/avatar",
      title: "avatar components",
    },
    pageContent:
      'Docs\n\nAvatar\n\nAvatar\n\nAn image element with a fallback for representing the user.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nCN\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\navatar\n\nCopy\n\nUsage\n\nimport\n\nAvatar\n\nAvatarFallback\n\nAvatarImage\n\nfrom\n\n"@/components/ui/avatar"\n\nCopy\n\n<Avatar>\n\nAvatarImage src\n\n"https://github.com/shadcn.png"\n\n/>\n\nAvatarFallback\n\nCN\n\n</\n\nAvatarFallback\n\n</Avatar>\n\nCopy\n\nAspect Ratio\n\nBadge',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/context-menu",
      title: "context-menu components",
    },
    pageContent:
      'Docs\n\nContext Menu\n\nContext Menu\n\nDisplays a menu to the user \u2014 such as a set of actions or functions \u2014 triggered by a button.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nRight click here\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ncontext-menu\n\nCopy\n\nUsage\n\nimport {\n\nContextMenu,\n\nContextMenuContent,\n\nContextMenuItem,\n\nContextMenuTrigger,\n\n} from "@/components/ui/context-menu"\n\nCopy\n\n<ContextMenu>\n\nContextMenuTrigger\n\nRight click\n\n</\n\nContextMenuTrigger\n\n<ContextMenuContent>\n\nContextMenuItem\n\nProfile\n\n</\n\nContextMenuItem\n\nContextMenuItem\n\nBilling\n\n</\n\nContextMenuItem\n\nContextMenuItem',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/context-menu",
      title: "context-menu components",
    },
    pageContent:
      "Team\n\n</\n\nContextMenuItem\n\nContextMenuItem\n\nSubscription\n\n</\n\nContextMenuItem\n\n</ContextMenuContent>\n\n</ContextMenu>\n\nCopy\n\nCommand\n\nData Table",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/toast",
      title: "toast components",
    },
    pageContent:
      'Docs\n\nToast\n\nToast\n\nA succinct message that is displayed temporarily.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nRun the following command:\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ntoast\n\nCopy\n\nAdd the Toaster component\n\napp/layout.tsx\n\nimport\n\nToaster\n\nfrom\n\n"@/components/ui/toaster"\n\nexport\n\ndefault\n\nfunction\n\nRootLayout\n\n({\n\nchildren\n\n})\n\nreturn (\n\nhtml lang\n\n"en"\n\n<head />\n\n<body>\n\nmain\n\n>{\n\nchildren\n\n}</\n\nmain\n\n<Toaster />\n\n</body>\n\n</html>\n\nCopy\n\nUsage\n\nThe useToast hook returns a toast function that you can use to display a toast.\n\nimport\n\nuseToast\n\nfrom\n\n"@/components/ui/use-toast"\n\nCopy',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/toast",
      title: "toast components",
    },
    pageContent:
      'export\n\nconst\n\nToastDemo\n\n()\n\n=>\n\nconst\n\ntoast\n\nuseToast\n\n()\n\nreturn (\n\n<Button\n\nonClick\n\n={()\n\n=>\n\ntoast({\n\ntitle: "Scheduled: Catch up",\n\ndescription: "Friday, February 10, 2023 at 5:57 PM",\n\n})\n\n}}\n\nShow Toast\n\n</Button>\n\nCopy\n\nTo display multiple toasts at the same time, you can update the TOAST_LIMIT in use-toast.tsx.\n\nExamples\n\nSimple\n\nStyle:\n\nWith title\n\nStyle:\n\nWith Action\n\nStyle:\n\nDestructive\n\nUse toast({ variant: "destructive" }) to display a destructive toast.\n\nStyle:\n\nTextarea\n\nToggle',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/toggle",
      title: "toggle components",
    },
    pageContent:
      'Docs\n\nToggle\n\nToggle\n\nA two-state button that can be either on or off.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ntoggle\n\nCopy\n\nUsage\n\nimport\n\nToggle\n\nfrom\n\n"@/components/ui/toggle"\n\nCopy\n\nToggle\n\nToggle\n\n</\n\nToggle\n\nCopy\n\nExamples\n\nDefault\n\nStyle:\n\nOutline\n\nStyle:\n\nWith Text\n\nStyle:\n\nSmall\n\nStyle:\n\nLarge\n\nStyle:\n\nDisabled\n\nStyle:\n\nToast\n\nTooltip',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/checkbox",
      title: "checkbox components",
    },
    pageContent:
      'Docs\n\nCheckbox\n\nCheckbox\n\nA control that allows the user to toggle between checked and not checked.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ncheckbox\n\nCopy\n\nUsage\n\nimport\n\nCheckbox\n\nfrom\n\n"@/components/ui/checkbox"\n\nCopy\n\n<Checkbox />\n\nCopy\n\nExamples\n\nWith text\n\nStyle:\n\nYou agree to our Terms of Service and Privacy Policy.\n\nDisabled\n\nStyle:\n\nForm\n\nStyle:\n\nYou can manage your mobile notifications in the mobile settings page.\n\nStyle:\n\nSelect the items you want to display in the sidebar.\n\nCard\n\nCollapsible',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/alert-dialog",
      title: "alert-dialog components",
    },
    pageContent:
      'Docs\n\nAlert Dialog\n\nAlert Dialog\n\nA modal dialog that interrupts the user with important content and expects a response.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nalert-dialog\n\nCopy\n\nUsage\n\nimport {\n\nAlertDialog,\n\nAlertDialogAction,\n\nAlertDialogCancel,\n\nAlertDialogContent,\n\nAlertDialogDescription,\n\nAlertDialogFooter,\n\nAlertDialogHeader,\n\nAlertDialogTitle,\n\nAlertDialogTrigger,\n\n} from "@/components/ui/alert-dialog"\n\nCopy\n\n<AlertDialog>\n\nAlertDialogTrigger\n\nOpen\n\n</\n\nAlertDialogTrigger\n\n<AlertDialogContent>\n\n<AlertDialogHeader>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/alert-dialog",
      title: "alert-dialog components",
    },
    pageContent:
      "AlertDialogTitle\n\nAre you absolutely sure?\n\n</\n\nAlertDialogTitle\n\n<AlertDialogDescription>\n\nThis action cannot be undone. This will permanently delete your account\n\nand remove your data from our servers.\n\n</AlertDialogDescription>\n\n</AlertDialogHeader>\n\n<AlertDialogFooter>\n\nAlertDialogCancel\n\nCancel\n\n</\n\nAlertDialogCancel\n\nAlertDialogAction\n\nContinue\n\n</\n\nAlertDialogAction\n\n</AlertDialogFooter>\n\n</AlertDialogContent>\n\n</AlertDialog>\n\nCopy\n\nAlert\n\nAspect Ratio",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/astro",
      title: "astro installation",
    },
    pageContent:
      "Docs\n\nAstro\n\nAstro\n\nInstall and configure Astro.\n\nCreate project\n\nStart by creating a new Astro project:\n\nnpm create astro@latest\n\nCopy\n\nConfigure your Astro project\n\nYou will be asked a few questions to configure your project:\n\nAdd React to your project\n\nCopy\n\nWhere should we create your new project?\n\n./your-app-name\n\nHow would you like to start your new project?\n\nChoose a starter template (or Empty)\n\nInstall dependencies?\n\nYes\n\nDo you plan to write TypeScript?\n\nYes\n\nHow strict should TypeScript be?\n\nStrict\n\nInitialize a new git repository? (optional)",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/astro",
      title: "astro installation",
    },
    pageContent:
      'Yes/No\n\nCopy\n\nAdd React to your project\n\nInstall React using the Astro CLI:\n\nnpx\n\nastro\n\nadd\n\nreact\n\nCopy\n\nAnswer Yes to all the question prompted by the CLI when installing React.\n\nAdd Tailwind CSS to your project\n\nInstall Tailwind CSS using the Astro CLI:\n\nnpx\n\nastro\n\nadd\n\ntailwind\n\nCopy\n\nAnswer Yes to all the question prompted by the CLI when installing Tailwind CSS.\n\nEdit tsconfig.json file\n\nAdd the code below to the tsconfig.json file to resolve paths:\n\ncompilerOptions\n\nbaseUrl\n\n"."\n\npaths\n\n@/*\n\n"src/*"\n\nCopy\n\nRun the CLI\n\nRun the shadcn-ui init command to setup your project:',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/astro",
      title: "astro installation",
    },
    pageContent:
      "npx shadcn-ui@latest init\n\nCopy\n\nConfigure components.json\n\nYou will be asked a few questions to configure components.json:\n\nWould you like to use TypeScript (recommended)? no / yes\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a \u203a ./src/styles/globals.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.cjs\n\nConfigure the import alias for components: \u203a @/components",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/astro",
      title: "astro installation",
    },
    pageContent:
      "Configure the import alias for utils: \u203a @/lib/utils\n\nAre you using React Server Components? \u203a no\n\nCopy\n\nImport the globals.css file\n\nImport the globals.css file in the src/index.astro file:\n\n---\n\nimport '@/styles/globals.css'\n\n---\n\nCopy\n\nUpdate astro tailwind config\n\nTo prevent serving the Tailwind base styles twice, we need to tell Astro not to apply the base styles, since we already include them in our own globals.css file. To do this, set the applyBaseStyles config option for the tailwind plugin in astro.config.mjs to false.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/astro",
      title: "astro installation",
    },
    pageContent:
      'export default defineConfig({\n\nintegrations: [\n\ntailwind({\n\napplyBaseStyles: false,\n\n}),\n\n],\n\n})\n\nCopy\n\nThat\'s it\n\nYou can now start adding components to your project.\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbutton\n\nCopy\n\nThe command above will add the Button component to your project. You can then import it like this:\n\n---\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\n---\n\n<html lang="en">\n\n<head>\n\ntitle\n\nAstro\n\n</\n\ntitle\n\n</head>\n\n<body>\n\nButton\n\nHello World\n\n</\n\nButton\n\n</body>\n\n</html>\n\nCopy\n\nGatsby\n\nLaravel',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/popover",
      title: "popover components",
    },
    pageContent:
      'Docs\n\nPopover\n\nPopover\n\nDisplays rich content in a portal, triggered by a button.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\npopover\n\nCopy\n\nUsage\n\nimport {\n\nPopover,\n\nPopoverContent,\n\nPopoverTrigger,\n\n} from "@/components/ui/popover"\n\nCopy\n\n<Popover>\n\nPopoverTrigger\n\nOpen\n\n</\n\nPopoverTrigger\n\nPopoverContent\n\nPlace content for the popover here.\n\n</\n\nPopoverContent\n\n</Popover>\n\nCopy\n\nNavigation Menu\n\nProgress',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components-json",
      title: "components-json",
    },
    pageContent:
      "Docs\n\ncomponents.json\n\ncomponents.json\n\nConfiguration for your project.\n\nThe components.json file holds configuration for your project.\n\nWe use it to understand how your project is set up and how to generate components customized for your project.\n\nNote: The components.json file is optional and only required if you're\nusing the CLI to add components to your project. If you're using the copy\nand paste method, you don't need this file.\n\nYou can create a components.json file in your project by running the following command:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components-json",
      title: "components-json",
    },
    pageContent:
      'npx shadcn-ui@latest init\n\nCopy\n\nSee the CLI section for more information.\n\n$schema\n\nYou can see the JSON Schema for components.json here.\n\ncomponents.json\n\n$schema\n\n"https://ui.shadcn.com/schema.json"\n\nCopy\n\nstyle\n\nThe style for your components. This cannot be changed after initialization.\n\ncomponents.json\n\nstyle\n\n"default"\n\n"new-york"\n\nCopy\n\nStyle:\n\nCreate project\n\nDeploy your new project in one-click.\n\nSelect\n\ntailwind\n\nConfiguration to help the CLI understand how Tailwind CSS is set up in your project.\n\nSee the installation section for how to set up Tailwind CSS.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components-json",
      title: "components-json",
    },
    pageContent:
      'tailwind.config\n\nPath to where your tailwind.config.js file is located.\n\ncomponents.json\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\n"tailwind.config.ts"\n\nCopy\n\ntailwind.css\n\nPath to the CSS file that imports Tailwind CSS into your project.\n\ncomponents.json\n\ntailwind\n\ncss\n\n"styles/global.css"\n\nCopy\n\ntailwind.baseColor\n\nThis is used to generate the default color palette for your components. This cannot be changed after initialization.\n\ncomponents.json\n\ntailwind\n\nbaseColor\n\n"gray"\n\n"neutral"\n\n"slate"\n\n"stone"\n\n"zinc"\n\nCopy\n\ntailwind.cssVariables\n\nYou can choose between using CSS variables or Tailwind CSS utility classes for theming.\n\nTo use utility classes for theming set tailwind.cssVariables to false. For CSS variables, set tailwind.cssVariables to true.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components-json",
      title: "components-json",
    },
    pageContent:
      "components.json\n\ntailwind\n\ncssVariables\n\ntrue\n\n` | `\n\nfalse\n\nCopy\n\nFor more information, see the theming docs.\n\nThis cannot be changed after initialization. To switch between CSS variables and utility classes, you'll have to delete and re-install your components.\n\nrsc\n\nWhether or not to enable support for React Server Components.\n\nThe CLI automatically adds a use client directive to client components when set to true.\n\ncomponents.json\n\nrsc\n\ntrue\n\n` | `\n\nfalse\n\nCopy\n\ntsx\n\nChoose between TypeScript or JavaScript components.\n\nSetting this option to false allows components to be added as JavaScript with the .jsx file extension.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components-json",
      title: "components-json",
    },
    pageContent:
      'components.json\n\ntsx\n\ntrue\n\n` | `\n\nfalse\n\nCopy\n\naliases\n\nThe CLI uses these values and the paths config from your tsconfig.json or jsconfig.json file to place generated components in the correct location.\n\nPath aliases have to be set up in your tsconfig.json or jsconfig.json file.\n\nImportant: If you\'re using the src directory, make sure it is included\nunder paths in your tsconfig.json or jsconfig.json file.\n\naliases.utils\n\nImport alias for your utility functions.\n\ncomponents.json\n\naliases\n\nutils\n\n"@/lib/utils"\n\nCopy\n\naliases.components',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components-json",
      title: "components-json",
    },
    pageContent:
      'Import alias for your components.\n\ncomponents.json\n\naliases\n\ncomponents\n\n"@/components"\n\nCopy\n\nInstallation\n\nTheming',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/skeleton",
      title: "skeleton components",
    },
    pageContent:
      'Docs\n\nSkeleton\n\nSkeleton\n\nUse to show a placeholder while content is loading.\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nskeleton\n\nCopy\n\nUsage\n\nimport\n\nSkeleton\n\nfrom\n\n"@/components/ui/skeleton"\n\nCopy\n\nSkeleton className\n\n"w-[100px] h-[20px] rounded-full"\n\n/>\n\nCopy\n\nSheet\n\nSlider',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/gatsby",
      title: "gatsby installation",
    },
    pageContent:
      "Docs\n\nGatsby\n\nGatsby\n\nInstall and configure Gatsby.\n\nCreate project\n\nStart by creating a new Gatsby project using create-gatsby:\n\nnpm init gatsby\n\nCopy\n\nConfigure your Gatsby project to use TypeScript and Tailwind CSS\n\nYou will be asked a few questions to configure your project:\n\n\u2714 What would you like to call your site?\n\nyour-app-name\n\n\u2714 What would you like to name the folder where your site will be created?\n\nyour-app-name\n\n\u2714 Will you be using JavaScript or TypeScript?\n\nTypeScript\n\n\u2714 Will you be using a CMS?\n\nChoose whatever you want\n\n\u2714 Would you like to install a styling system?\n\nTailwind CSS\n\n\u2714 Would you like to install additional features with other plugins?\n\nChoose whatever you want\n\n\u2714 Shall we do this? (Y/n) \u00b7 Yes",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/gatsby",
      title: "gatsby installation",
    },
    pageContent:
      'Copy\n\nEdit tsconfig.json file\n\nAdd the code below to the tsconfig.json file to resolve paths:\n\n"compilerOptions": {\n\n// ...\n\n"baseUrl"\n\n"."\n\n"paths": {\n\n"@/*": [\n\n"./src/*"\n\n// ...\n\nCopy\n\nCreate gatsby-node.ts file\n\nCreate a gatsby-node.ts file at the root of your project if it doesn\u2019t already exist, and add the code below to the gatsby-node file so your app can resolve paths:\n\nimport\n\nas\n\npath\n\nfrom\n\n"path"\n\nexport\n\nconst\n\nonCreateWebpackConfig\n\n({\n\nactions\n\n})\n\n=>\n\nactions.setWebpackConfig({\n\nresolve: {\n\nalias: {\n\n"@/components"\n\npath\n\nresolve\n\n__dirname\n\n"src/components"\n\n),',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/gatsby",
      title: "gatsby installation",
    },
    pageContent:
      '"@/lib/utils"\n\npath\n\nresolve\n\n__dirname\n\n"src/lib/utils"\n\n),\n\n},\n\n},\n\n})\n\nCopy\n\nRun the CLI\n\nRun the shadcn-ui init command to setup your project:\n\nnpx shadcn-ui@latest init\n\nCopy\n\nConfigure components.json\n\nYou will be asked a few questions to configure components.json:\n\nWould you like to use TypeScript (recommended)? no / yes\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a \u203a ./src/styles/globals.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.js',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/gatsby",
      title: "gatsby installation",
    },
    pageContent:
      'Configure the import alias for components: \u203a @/components\n\nConfigure the import alias for utils: \u203a @/lib/utils\n\nAre you using React Server Components? \u203a no\n\nCopy\n\nThat\'s it\n\nYou can now start adding components to your project.\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbutton\n\nCopy\n\nThe command above will add the Button component to your project. You can then import it like this:\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nexport\n\ndefault\n\nfunction\n\nHome\n\n()\n\nreturn (\n\n<div>\n\nButton\n\nClick me\n\n</\n\nButton\n\n</div>\n\nCopy\n\nRemix\n\nAstro',
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs", title: "summary" },
    pageContent:
      "Docs\n\nIntroduction\n\nIntroduction\n\nRe-usable components built using Radix UI and Tailwind CSS.\n\nThis is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.\n\nWhat do you mean by not a component library?\n\nI mean you do not install it as a dependency. It is not available or distributed via npm.\n\nPick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.\n\nUse this as a reference to build your own component libraries.",
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs", title: "summary" },
    pageContent:
      "FAQ\n\nWhy copy/paste and not packaged as a dependency?\n\nDo you plan to publish it as an npm package?\n\nWhich frameworks are supported?\n\nCan I use this in my project?\n\nInstallation",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/combobox",
      title: "combobox components",
    },
    pageContent:
      'Docs\n\nCombobox\n\nCombobox\n\nAutocomplete input and command palette with a list of suggestions.\n\nStyle:\n\nInstallation\n\nThe Combobox is built using a composition of the <Popover /> and the <Command /> components.\n\nSee installation instructions for the Popover and the Command components.\n\nUsage\n\n"use client"\n\nimport\n\nas\n\nReact\n\nfrom\n\n"react"\n\nimport\n\nCheck\n\nChevronsUpDown\n\nfrom\n\n"lucide-react"\n\nimport\n\ncn\n\nfrom\n\n"@/lib/utils"\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nimport {\n\nCommand,\n\nCommandEmpty,\n\nCommandGroup,\n\nCommandInput,\n\nCommandItem,\n\n} from "@/components/ui/command"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/combobox",
      title: "combobox components",
    },
    pageContent:
      'import {\n\nPopover,\n\nPopoverContent,\n\nPopoverTrigger,\n\n} from "@/components/ui/popover"\n\nconst frameworks = [\n\nvalue: "next.js",\n\nlabel: "Next.js",\n\n},\n\nvalue: "sveltekit",\n\nlabel: "SvelteKit",\n\n},\n\nvalue: "nuxt.js",\n\nlabel: "Nuxt.js",\n\n},\n\nvalue: "remix",\n\nlabel: "Remix",\n\n},\n\nvalue: "astro",\n\nlabel: "Astro",\n\n},\n\nexport\n\nfunction\n\nComboboxDemo\n\n()\n\nconst\n\nopen\n\nsetOpen\n\nReact\n\nuseState\n\n(false)\n\nconst\n\nvalue\n\nsetValue\n\nReact\n\nuseState\n\n""\n\nreturn (\n\nPopover open\n\n={\n\nopen\n\nonOpenChange\n\n={\n\nsetOpen\n\n}>\n\n<PopoverTrigger asChild>\n\n<Button\n\nvariant="outline"\n\nrole="combobox"\n\naria-expanded={open}',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/combobox",
      title: "combobox components",
    },
    pageContent:
      'className="w-[200px] justify-between"\n\n{value\n\nframeworks\n\nfind\n\n((\n\nframework\n\n=>\n\nframework\n\nvalue\n\n===\n\nvalue\n\n)?.\n\nlabel\n\n: "Select framework..."}\n\nChevronsUpDown className\n\n"ml-2 h-4 w-4 shrink-0 opacity-50"\n\n/>\n\n</Button>\n\n</PopoverTrigger>\n\nPopoverContent className\n\n"w-[200px] p-0"\n\n<Command>\n\nCommandInput placeholder\n\n"Search framework..."\n\n/>\n\nCommandEmpty\n\nNo framework found.\n\n</\n\nCommandEmpty\n\n<CommandGroup>\n\nframeworks\n\nmap\n\n((\n\nframework\n\n=>\n\n<CommandItem\n\nkey\n\n={\n\nframework\n\nvalue\n\nonSelect\n\n={(\n\ncurrentValue\n\n=>\n\nsetValue\n\ncurrentValue\n\n===\n\nvalue\n\n""\n\ncurrentValue\n\nsetOpen(false)\n\n}}',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/combobox",
      title: "combobox components",
    },
    pageContent:
      '<Check\n\nclassName={cn(\n\n"mr-2 h-4 w-4",\n\nvalue\n\n===\n\nframework\n\nvalue\n\n"opacity-100"\n\n"opacity-0"\n\n)}\n\n/>\n\nframework\n\nlabel\n\n</CommandItem>\n\n))}\n\n</CommandGroup>\n\n</Command>\n\n</PopoverContent>\n\n</Popover>\n\nCopy\n\nExamples\n\nCombobox\n\nStyle:\n\nPopover\n\nStyle:\n\nStatus\n\nDropdown menu\n\nStyle:\n\nfeatureCreate a new project\n\nForm\n\nStyle:\n\nThis is the language that will be used in the dashboard.\n\nCollapsible\n\nCommand',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'Docs\n\nChangelog\n\nChangelog\n\nLatest updates and announcements.\n\nJuly 2023 - JavaScript\n\nThis project and the components are written in TypeScript. We recommend using TypeScript for your project as well.\n\nHowever we provide a JavaScript version of the components, available via the cli.\n\nWould you like to use TypeScript (recommended)? no\n\nCopy\n\nTo opt-out of TypeScript, you can use the tsx flag in your components.json file.\n\ncomponents.json\n\nstyle\n\n"default"\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"src/app/globals.css"\n\nbaseColor',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      '"zinc"\n\ncssVariables\n\ntrue\n\n},\n\nrsc\n\nfalse,\n\ntsx\n\nfalse,\n\naliases\n\nutils\n\n"~/lib/utils"\n\ncomponents\n\n"~/components"\n\nCopy\n\nTo configure import aliases, you can use the following jsconfig.json:\n\njsconfig.json\n\ncompilerOptions\n\npaths\n\n@/*\n\n"./*"\n\nCopy\n\nJune 2023 - New CLI, Styles and more\n\nI have a lot of updates to share with you today:\n\nNew CLI - Rewrote the CLI from scratch. You can now add components, dependencies and configure import paths.\n\nTheming - Choose between using CSS variables or Tailwind CSS utility classes for theming.\n\nBase color - Configure the base color for your project. This will be used to generate the default color palette for your components.\n\nReact Server Components - Opt out of using React Server Components. The CLI will automatically append or remove the use client directive.\n\nStyles - Introducing a new concept called Style. A style comes with its own set of components, animations, icons and more.\n\nExit animations - Added exit animations to all components.\n\nOther updates - New icon button size, updated sheet component and more.\n\nUpdating your project - How to update your project to get the latest changes.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      "New CLI\n\nI've been working on a new CLI for the past few weeks. It's a complete rewrite. It comes with a lot of new features and improvements.\n\ninit\n\nnpx shadcn-ui@latest init\n\nCopy\n\nWhen you run the init command, you will be asked a few questions to configure components.json:\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a \u203a app/globals.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.js",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'Configure the import alias for components: \u203a @/components\n\nConfigure the import alias for utils: \u203a @/lib/utils\n\nAre you using React Server Components? \u203a no / yes\n\nCopy\n\nThis file contains all the information about your components: where to install them, the import paths, how they are styled...etc.\n\nYou can use this file to change the import path of a component, set a baseColor or change the styling method.\n\ncomponents.json\n\nstyle\n\n"default"\n\ntailwind\n\nconfig\n\n"tailwind.config.ts"\n\ncss\n\n"src/app/globals.css"\n\nbaseColor\n\n"zinc"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'cssVariables\n\ntrue\n\n},\n\nrsc\n\nfalse,\n\naliases\n\nutils\n\n"~/lib/utils"\n\ncomponents\n\n"~/components"\n\nCopy\n\nThis means you can now use the CLI with any directory structure including src and app directories.\n\nadd\n\nnpx shadcn-ui@latest add\n\nCopy\n\nThe add command is now much more capable. You can now add UI components but also import more complex components (coming soon).\n\nThe CLI will automatically resolve all components and dependencies, format them based on your custom config and add them to your project.\n\ndiff (experimental)\n\nnpx shadcn-ui diff',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      "Copy\n\nWe're also introducing a new diff command to help you keep track of upstream updates.\n\nYou can use this command to see what has changed in the upstream repository and update your project accordingly.\n\nRun the diff command to get a list of components that have updates available:\n\nnpx shadcn-ui diff\n\nCopy\n\nThe following components have updates available:\n\nbutton\n\n/path/to/my-app/components/ui/button.tsx\n\ntoast\n\n/path/to/my-app/components/ui/use-toast.ts\n\n/path/to/my-app/components/ui/toaster.tsx\n\nCopy\n\nThen run diff [component] to see the changes:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'npx\n\nshadcn-ui\n\ndiff\n\nalert\n\nCopy\n\nconst alertVariants = cva(\n\n"relative w-full rounded-lg border",\n\n+ "relative w-full pl-12 rounded-lg border"\n\nCopy\n\nTheming with CSS Variables or Tailwind Colors\n\nYou can choose between using CSS variables or Tailwind CSS utility classes for theming.\n\nWhen you add new components, the CLI will automatically use the correct theming methods based on your components.json configuration.\n\nUtility classes\n\ndiv className\n\nbg-zinc-950\n\ndark:bg-white\n\n/>\n\nCopy\n\nTo use utility classes for theming set tailwind.cssVariables to false in your components.json file.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'components.json\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"app/globals.css"\n\nbaseColor\n\n"slate"\n\ncssVariables\n\nfalse\n\nCopy\n\nCSS Variables\n\ndiv className\n\nbg-background\n\ntext-foreground\n\n/>\n\nCopy\n\nTo use CSS variables classes for theming set tailwind.cssVariables to true in your components.json file.\n\ncomponents.json\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"app/globals.css"\n\nbaseColor\n\n"slate"\n\ncssVariables\n\ntrue\n\nCopy\n\nBase color\n\nYou can now configure the base color for your project. This will be used to generate the default color palette for your components.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'components.json\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"app/globals.css"\n\nbaseColor\n\n"zinc"\n\ncssVariables\n\nfalse\n\nCopy\n\nChoose between gray, neutral, slate, stone or zinc.\n\nIf you have cssVariables set to true, we will set the base colors as CSS variables in your globals.css file. If you have cssVariables set to false, we will inline the Tailwind CSS utility classes in your components.\n\nReact Server Components\n\nIf you\'re using a framework that does not support React Server Components, you can now opt out by setting rsc to false. We will automatically append or remove the use client directive when adding components.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      "components.json\n\nrsc\n\nfalse\n\nCopy\n\nStyles\n\nWe are introducing a new concept called Style.\n\nYou can think of style as the visual foundation: shapes, icons, animations & typography. A style comes with its own set of components, animations, icons and more.\n\nWe are shipping two styles: default and new-york (with more coming soon).\n\nThe default style is the one you are used to. It's the one we've been using since the beginning of this project. It uses lucide-react for icons and tailwindcss-animate for animations.\n\nThe new-york style is a new style. It ships with smaller buttons, cards with shadows and a new set of icons from Radix Icons.\n\nWhen you run the init command, you will be asked which style you would like to use. This is saved in your components.json file.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'components.json\n\nstyle\n\n"new-york"\n\nCopy\n\nTheming\n\nStart with a style as the base then theme using CSS variables or Tailwind CSS utility classes to completely change the look of your components.\n\nExit animations\n\nI added exit animations to all components. Click on the combobox below to see the subtle exit animation.\n\nStyle:\n\nThe animations can be customized using utility classes.\n\nOther updates\n\nButton\n\nAdded a new button size icon:\n\nStyle:\n\nSheet\n\nRenamed position to side to match the other elements.\n\nStyle:\n\nRemoved the size props. Use className="w-[200px] md:w-[450px]" for responsive sizing.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'Updating your project\n\nSince we follow a copy and paste approach, you will need to manually update your project to get the latest changes.\n\nNote: we are working on a diff command to help you\nkeep track of upstream updates.\n\nAdd components.json\n\nCreating a components.json file at the root:\n\ncomponents.json\n\nstyle\n\n"default"\n\nrsc\n\ntrue,\n\ntailwind\n\nconfig\n\n"tailwind.config.js"\n\ncss\n\n"app/globals.css"\n\nbaseColor\n\n"slate"\n\ncssVariables\n\ntrue\n\n},\n\naliases\n\ncomponents\n\n"@/components"\n\nutils\n\n"@/lib/utils"\n\nCopy\n\nUpdate the values for tailwind.css and aliases to match your project structure.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'Button\n\nAdd the icon size to the buttonVariants:\n\ncomponents/ui/button.tsx\n\nconst buttonVariants = cva({\n\nvariants: {\n\nsize: {\n\ndefault: "h-10 px-4 py-2",\n\nsm: "h-9 rounded-md px-3",\n\nlg: "h-11 rounded-md px-8",\n\nicon: "h-10 w-10",\n\n},\n\n},\n\n})\n\nCopy\n\nSheet\n\nReplace the content of sheet.tsx with the following:\n\ncomponents/ui/sheet.tsx\n\n"use client"\n\nimport\n\nas\n\nReact\n\nfrom\n\n"react"\n\nimport\n\nas\n\nSheetPrimitive\n\nfrom\n\n"@radix-ui/react-dialog"\n\nimport\n\ncva\n\ntype\n\nVariantProps\n\nfrom\n\n"class-variance-authority"\n\nimport\n\nfrom\n\n"lucide-react"\n\nimport\n\ncn\n\nfrom\n\n"@/lib/utils"\n\nconst\n\nSheet',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'SheetPrimitive\n\nRoot\n\nconst\n\nSheetTrigger\n\nSheetPrimitive\n\nTrigger\n\nconst\n\nSheetClose\n\nSheetPrimitive\n\nClose\n\nconst\n\nSheetPortal\n\n({\n\nclassName,\n\n...props\n\n}:\n\nSheetPrimitive\n\nDialogPortalProps\n\n=>\n\nSheetPrimitive.Portal className\n\n={\n\ncn\n\nclassName\n\n)}\n\n{...\n\nprops\n\n/>\n\nSheetPortal\n\ndisplayName\n\nSheetPrimitive\n\nPortal\n\ndisplayName\n\nconst\n\nSheetOverlay\n\nReact\n\nforwardRef\n\nReact\n\nElementRef\n\n<typeof\n\nSheetPrimitive\n\nOverlay\n\n>,\n\nReact\n\nComponentPropsWithoutRef\n\n<typeof\n\nSheetPrimitive\n\nOverlay\n\n>(({\n\nclassName\n\n...\n\nprops\n\n},\n\nref\n\n=>\n\n<SheetPrimitive.Overlay\n\nclassName={cn(\n\n"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'className\n\n)}\n\n{...props}\n\nref={ref}\n\n/>\n\n))\n\nSheetOverlay\n\ndisplayName\n\nSheetPrimitive\n\nOverlay\n\ndisplayName\n\nconst sheetVariants = cva(\n\n"fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",\n\nvariants: {\n\nside: {\n\ntop: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",\n\nbottom:\n\n"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",\n\nleft: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'right:\n\n"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",\n\n},\n\n},\n\ndefaultVariants: {\n\nside: "right",\n\n},\n\ninterface SheetContentProps\n\nextends\n\nReact\n\nComponentPropsWithoutRef\n\n<typeof\n\nSheetPrimitive\n\nContent\n\n>,\n\nVariantProps\n\n<typeof\n\nsheetVariants\n\n{}\n\nconst\n\nSheetContent\n\nReact\n\nforwardRef\n\nReact\n\nElementRef\n\n<typeof\n\nSheetPrimitive\n\nContent\n\n>,\n\nSheetContentProps\n\n>(({\n\nside\n\n"right"\n\nclassName\n\nchildren\n\n...\n\nprops\n\n},\n\nref\n\n=>\n\n<SheetPortal>\n\n<SheetOverlay />\n\n<SheetPrimitive.Content\n\nref={ref}',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'className\n\n={\n\ncn\n\nsheetVariants\n\n({\n\nside\n\n}),\n\nclassName\n\n)}\n\n{...props}\n\n{children}\n\nSheetPrimitive.Close className\n\n"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"\n\nX className\n\n"h-4 w-4"\n\n/>\n\nspan className\n\n"sr-only"\n\nClose\n\n</\n\nspan\n\n</SheetPrimitive.Close>\n\n</SheetPrimitive.Content>\n\n</SheetPortal>\n\n))\n\nSheetContent\n\ndisplayName\n\nSheetPrimitive\n\nContent\n\ndisplayName',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'const\n\nSheetHeader\n\n({\n\nclassName,\n\n...props\n\n}:\n\nReact\n\nHTMLAttributes\n\nHTMLDivElement\n\n>)\n\n=>\n\n<div\n\nclassName={cn(\n\n"flex flex-col space-y-2 text-center sm:text-left",\n\nclassName\n\n)}\n\n{...props}\n\n/>\n\nSheetHeader\n\ndisplayName\n\n"SheetHeader"\n\nconst\n\nSheetFooter\n\n({\n\nclassName,\n\n...props\n\n}:\n\nReact\n\nHTMLAttributes\n\nHTMLDivElement\n\n>)\n\n=>\n\n<div\n\nclassName={cn(\n\n"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",\n\nclassName\n\n)}\n\n{...props}\n\n/>\n\nSheetFooter\n\ndisplayName\n\n"SheetFooter"\n\nconst\n\nSheetTitle\n\nReact\n\nforwardRef\n\nReact\n\nElementRef\n\n<typeof\n\nSheetPrimitive\n\nTitle\n\n>,\n\nReact\n\nComponentPropsWithoutRef',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      '<typeof\n\nSheetPrimitive\n\nTitle\n\n>(({\n\nclassName\n\n...\n\nprops\n\n},\n\nref\n\n=>\n\n<SheetPrimitive.Title\n\nref={ref}\n\nclassName\n\n={\n\ncn\n\n"text-lg font-semibold text-foreground"\n\nclassName\n\n)}\n\n{...props}\n\n/>\n\n))\n\nSheetTitle\n\ndisplayName\n\nSheetPrimitive\n\nTitle\n\ndisplayName\n\nconst\n\nSheetDescription\n\nReact\n\nforwardRef\n\nReact\n\nElementRef\n\n<typeof\n\nSheetPrimitive\n\nDescription\n\n>,\n\nReact\n\nComponentPropsWithoutRef\n\n<typeof\n\nSheetPrimitive\n\nDescription\n\n>(({\n\nclassName\n\n...\n\nprops\n\n},\n\nref\n\n=>\n\n<SheetPrimitive.Description\n\nref={ref}\n\nclassName\n\n={\n\ncn\n\n"text-sm text-muted-foreground"\n\nclassName\n\n)}\n\n{...props}\n\n/>\n\n))\n\nSheetDescription',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/changelog",
      title: "changelog",
    },
    pageContent:
      'displayName\n\nSheetPrimitive\n\nDescription\n\ndisplayName\n\nexport {\n\nSheet,\n\nSheetTrigger,\n\nSheetClose,\n\nSheetContent,\n\nSheetHeader,\n\nSheetFooter,\n\nSheetTitle,\n\nSheetDescription,\n\nCopy\n\nRename position to side\n\nCopy\n\n<Sheet position="right" />\n\n+ <Sheet side="right" />\n\nCopy\n\nThank you\n\nI\'d like to thank everyone who has been using this project, providing feedback and contributing to it. I really appreciate it. Thank you \ud83d\ude4f\n\nFigma\n\nAbout',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/hover-card",
      title: "hover-card components",
    },
    pageContent:
      'Docs\n\nHover Card\n\nHover Card\n\nFor sighted users to preview content available behind a link.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nhover-card\n\nCopy\n\nUsage\n\nimport {\n\nHoverCard,\n\nHoverCardContent,\n\nHoverCardTrigger,\n\n} from "@/components/ui/hover-card"\n\nCopy\n\n<HoverCard>\n\nHoverCardTrigger\n\nHover\n\n</\n\nHoverCardTrigger\n\n<HoverCardContent>\n\nThe React Framework \u2013 created and maintained by @vercel.\n\n</HoverCardContent>\n\n</HoverCard>\n\nCopy\n\nForm\n\nInput',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/slider",
      title: "slider components",
    },
    pageContent:
      'Docs\n\nSlider\n\nSlider\n\nAn input where the user selects a value from within a given range.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nslider\n\nCopy\n\nUsage\n\nimport\n\nSlider\n\nfrom\n\n"@/components/ui/slider"\n\nCopy\n\nSlider defaultValue\n\n={[33]}\n\nmax\n\n={100}\n\nstep\n\n={1}\n\n/>\n\nCopy\n\nSkeleton\n\nSwitch',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/input",
      title: "input components",
    },
    pageContent:
      'Docs\n\nInput\n\nInput\n\nDisplays a form input field or a component that looks like an input field.\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ninput\n\nCopy\n\nUsage\n\nimport\n\nInput\n\nfrom\n\n"@/components/ui/input"\n\nCopy\n\n<Input />\n\nCopy\n\nExamples\n\nDefault\n\nStyle:\n\nFile\n\nStyle:\n\nDisabled\n\nStyle:\n\nWith Label\n\nStyle:\n\nWith Button\n\nStyle:\n\nForm\n\nStyle:\n\nThis is your public display name.\n\nHover Card\n\nLabel',
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs/figma", title: "figma" },
    pageContent:
      "Docs\n\nFigma\n\nFigma\n\nEvery component recreated in Figma. With customizable props, typography and icons.\n\nThe Figma UI Kit is open sourced by Pietro Schirano.\n\nGrab a copy\n\nhttps://www.figma.com/community/file/1203061493325953101\n\nTypography\n\nChangelog",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/radio-group",
      title: "radio-group components",
    },
    pageContent:
      'Docs\n\nRadio Group\n\nRadio Group\n\nA set of checkable buttons\u2014known as radio buttons\u2014where no more than one of the buttons can be checked at a time.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nradio-group\n\nCopy\n\nUsage\n\nimport\n\nLabel\n\nfrom\n\n"@/components/ui/label"\n\nimport\n\nRadioGroup\n\nRadioGroupItem\n\nfrom\n\n"@/components/ui/radio-group"\n\nCopy\n\n<RadioGroup defaultValue="option-one">\n\ndiv className\n\n"flex items-center space-x-2"\n\nRadioGroupItem value\n\n"option-one"\n\nid\n\n"option-one"\n\n/>\n\nLabel htmlFor\n\n"option-one"\n\nOption One\n\n</\n\nLabel\n\n</div>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/radio-group",
      title: "radio-group components",
    },
    pageContent:
      'div className\n\n"flex items-center space-x-2"\n\nRadioGroupItem value\n\n"option-two"\n\nid\n\n"option-two"\n\n/>\n\nLabel htmlFor\n\n"option-two"\n\nOption Two\n\n</\n\nLabel\n\n</div>\n\n</RadioGroup>\n\nCopy\n\nExamples\n\nForm\n\nStyle:\n\nProgress\n\nScroll Area',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      "Docs\n\nData Table\n\nData Table\n\nPowerful table and datagrids built using TanStack Table.\n\nStyle:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      "success ken99@yahoo.com $316.00 Open menu success Abe45@gmail.com $242.00 Open menu processing Monserrat44@gmail.com $837.00 Open menu success Silas22@gmail.com $874.00 Open menu failed carmella@hotmail.com $721.00 Open menu",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      "0 of 5 row(s) selected.\n\nIntroduction\n\nEvery data table or datagrid I've created has been unique. They all behave differently, have specific sorting and filtering requirements, and work with different data sources.\n\nIt doesn't make sense to combine all of these variations into a single component. If we do that, we'll lose the flexibility that headless UI provides.\n\nSo instead of a data-table component, I thought it would be more helpful to provide a guide on how to build your own.\n\nWe'll start with the basic <Table /> component and build a complex data table from scratch.\n\nTip: If you find yourself using the same table in multiple places in your app, you can always extract it into a reusable component.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      "Table of Contents\n\nThis guide will show you how to use TanStack Table and the <Table /> component to build your own custom data table. We'll cover the following topics:\n\nBasic Table\n\nRow Actions\n\nPagination\n\nSorting\n\nFiltering\n\nVisibility\n\nRow Selection\n\nReusable Components\n\nInstallation\n\nAdd the <Table /> component to your project:\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ntable\n\nCopy\n\nAdd tanstack/react-table dependency:\n\nnpm install @tanstack/react-table\n\nCopy\n\nPrerequisites\n\nWe are going to build a table to show recent payments. Here's what our data looks like:",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'type\n\nPayment\n\nid: string\n\namount: number\n\nstatus\n\n"pending"\n\n"processing"\n\n"success"\n\n"failed"\n\nemail: string\n\nexport\n\nconst\n\npayments\n\nPayment\n\n[]\n\nid: "728ed52f",\n\namount: 100,\n\nstatus: "pending",\n\nemail: "m@example.com",\n\n},\n\nid: "489e1d42",\n\namount: 125,\n\nstatus: "processing",\n\nemail: "example@gmail.com",\n\n},\n\n// ...\n\nCopy\n\nProject Structure\n\nStart by creating the following file structure:\n\napp\n\n\u2514\u2500\u2500 payments\n\n\u251c\u2500\u2500 columns.tsx\n\n\u251c\u2500\u2500 data-table.tsx\n\n\u2514\u2500\u2500 page.tsx\n\nCopy\n\nI\'m using a Next.js example here but this works for any other React framework.\n\ncolumns.tsx (client component) will contain our column definitions.\n\ndata-table.tsx (client component) will contain our <DataTable /> component.\n\npage.tsx (server component) is where we\'ll fetch data and render our table.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'Basic Table\n\nLet\'s start by building a basic table.\n\nColumn Definitions\n\nFirst, we\'ll define our columns.\n\napp/payments/columns.tsx\n\n"use client"\n\nimport\n\nColumnDef\n\nfrom\n\n"@tanstack/react-table"\n\n// This type is used to define the shape of our data.\n\n// You can use a Zod schema here if you want.\n\nexport\n\ntype\n\nPayment\n\nid: string\n\namount: number\n\nstatus\n\n"pending"\n\n"processing"\n\n"success"\n\n"failed"\n\nemail: string\n\nexport\n\nconst\n\ncolumns\n\nColumnDef\n\nPayment\n\n>[]\n\naccessorKey: "status",\n\nheader: "Status",\n\n},\n\naccessorKey: "email",\n\nheader: "Email",\n\n},\n\naccessorKey: "amount",\n\nheader: "Amount",\n\n},',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'Copy\n\nNote: Columns are where you define the core of what your table\nwill look like. They define the data that will be displayed, how it will be\nformatted, sorted and filtered.\n\n<DataTable /> component\n\nNext, we\'ll create a <DataTable /> component to render our table.\n\napp/payments/data-table.tsx\n\n"use client"\n\nimport {\n\nColumnDef,\n\nflexRender,\n\ngetCoreRowModel,\n\nuseReactTable,\n\n} from "@tanstack/react-table"\n\nimport {\n\nTable,\n\nTableBody,\n\nTableCell,\n\nTableHead,\n\nTableHeader,\n\nTableRow,\n\n} from "@/components/ui/table"\n\ninterface\n\nDataTableProps',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'TData\n\nTValue\n\ncolumns\n\nColumnDef\n\nTData\n\nTValue\n\n>[]\n\ndata: TData[]\n\nexport\n\nfunction\n\nDataTable\n\nTData\n\nTValue\n\n>({\n\ncolumns,\n\ndata,\n\n}:\n\nDataTableProps\n\nTData\n\nTValue\n\n>)\n\nconst\n\ntable\n\nuseReactTable\n\n({\n\ndata,\n\ncolumns,\n\ngetCoreRowModel: getCoreRowModel(),\n\n})\n\nreturn (\n\ndiv className\n\n"rounded-md border"\n\n<Table>\n\n<TableHeader>\n\ntable\n\ngetHeaderGroups\n\n().\n\nmap\n\n((\n\nheaderGroup\n\n=>\n\nTableRow key\n\n={\n\nheaderGroup\n\nid\n\n}>\n\nheaderGroup\n\nheaders\n\nmap\n\n((\n\nheader\n\n=>\n\nreturn (\n\nTableHead key\n\n={\n\nheader\n\nid\n\n}>\n\n{header.isPlaceholder\n\n? null\n\n: flexRender(\n\nheader\n\ncolumn\n\ncolumnDef\n\nheader\n\nheader.getContext()\n\n)}\n\n</TableHead>\n\n})}',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      '</TableRow>\n\n))}\n\n</TableHeader>\n\n<TableBody>\n\ntable\n\ngetRowModel\n\n().\n\nrows\n\n?.\n\nlength\n\ntable\n\ngetRowModel\n\n().\n\nrows\n\nmap\n\n((\n\nrow\n\n=>\n\n<TableRow\n\nkey\n\n={\n\nrow\n\nid\n\ndata-state\n\n={\n\nrow\n\ngetIsSelected\n\n()\n\n&&\n\n"selected"\n\nrow\n\ngetVisibleCells\n\n().\n\nmap\n\n((\n\ncell\n\n=>\n\nTableCell key\n\n={\n\ncell\n\nid\n\n}>\n\nflexRender\n\ncell\n\ncolumn\n\ncolumnDef\n\ncell\n\ncell\n\ngetContext\n\n())}\n\n</TableCell>\n\n))}\n\n</TableRow>\n\n))\n\n<TableRow>\n\nTableCell colSpan\n\n={\n\ncolumns\n\nlength\n\nclassName\n\n"h-24 text-center"\n\nNo results.\n\n</TableCell>\n\n</TableRow>\n\n)}\n\n</TableBody>\n\n</Table>\n\n</div>\n\nCopy\n\nTip: If you find yourself using <DataTable /> in multiple places, this is the component you could make reusable by extracting it to components/ui/data-table.tsx.\n\n<DataTable columns={columns} data={data} />',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'Render the table\n\nFinally, we\'ll render our table in our page component.\n\napp/payments/page.tsx\n\nimport\n\nPayment\n\ncolumns\n\nfrom\n\n"./columns"\n\nimport\n\nDataTable\n\nfrom\n\n"./data-table"\n\nasync\n\nfunction\n\ngetData\n\n():\n\nPromise\n\nPayment\n\n[]>\n\n// Fetch data from your API here.\n\nreturn [\n\nid: "728ed52f",\n\namount: 100,\n\nstatus: "pending",\n\nemail: "m@example.com",\n\n},\n\n// ...\n\nexport\n\ndefault\n\nasync\n\nfunction\n\nDemoPage\n\n()\n\nconst\n\ndata\n\nawait\n\ngetData\n\n()\n\nreturn (\n\ndiv className\n\n"container mx-auto py-10"\n\nDataTable columns\n\n={\n\ncolumns\n\ndata\n\n={\n\ndata\n\n/>\n\n</div>\n\nCopy\n\nCell Formatting\n\nLet\'s format the amount cell to display the dollar amount. We\'ll also align the cell to the right.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'Update columns definition\n\nUpdate the header and cell definitions for amount as follows:\n\napp/payments/columns.tsx\n\nexport\n\nconst\n\ncolumns\n\nColumnDef\n\nPayment\n\n>[]\n\naccessorKey: "amount",\n\nheader\n\n()\n\n=>\n\ndiv className\n\n"text-right"\n\nAmount\n\n</\n\ndiv\n\n>,\n\ncell\n\n({\n\nrow\n\n})\n\n=>\n\nconst\n\namount\n\nparseFloat\n\nrow\n\ngetValue\n\n"amount"\n\n))\n\nconst\n\nformatted\n\nnew\n\nIntl\n\nNumberFormat\n\n"en-US"\n\nstyle: "currency",\n\ncurrency: "USD",\n\n}).\n\nformat\n\namount\n\nreturn\n\ndiv className\n\n"text-right font-medium"\n\n>{\n\nformatted\n\n}</\n\ndiv\n\n},\n\n},\n\nCopy\n\nYou can use the same approach to format other cells and headers.\n\nRow Actions\n\nLet\'s add row actions to our table. We\'ll use a <Dropdown /> component for this.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'Update columns definition\n\nUpdate our columns definition to add a new actions column. The actions cell returns a <Dropdown /> component.\n\napp/payments/columns.tsx\n\n"use client"\n\nimport\n\nColumnDef\n\nfrom\n\n"@tanstack/react-table"\n\nimport\n\nMoreHorizontal\n\nfrom\n\n"lucide-react"\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nimport {\n\nDropdownMenu,\n\nDropdownMenuContent,\n\nDropdownMenuItem,\n\nDropdownMenuLabel,\n\nDropdownMenuSeparator,\n\nDropdownMenuTrigger,\n\n} from "@/components/ui/dropdown-menu"\n\nexport\n\nconst\n\ncolumns\n\nColumnDef\n\nPayment\n\n>[]\n\n// ...\n\nid: "actions",',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'cell\n\n({\n\nrow\n\n})\n\n=>\n\nconst\n\npayment\n\nrow\n\noriginal\n\nreturn (\n\n<DropdownMenu>\n\n<DropdownMenuTrigger asChild>\n\nButton variant\n\n"ghost"\n\nclassName\n\n"h-8 w-8 p-0"\n\nspan className\n\n"sr-only"\n\nOpen menu\n\n</\n\nspan\n\nMoreHorizontal className\n\n"h-4 w-4"\n\n/>\n\n</Button>\n\n</DropdownMenuTrigger>\n\nDropdownMenuContent align\n\n"end"\n\nDropdownMenuLabel\n\nActions\n\n</\n\nDropdownMenuLabel\n\n<DropdownMenuItem\n\nonClick\n\n={()\n\n=>\n\nnavigator\n\nclipboard\n\nwriteText\n\npayment\n\nid\n\n)}\n\nCopy payment ID\n\n</DropdownMenuItem>\n\n<DropdownMenuSeparator />\n\nDropdownMenuItem\n\nView customer\n\n</\n\nDropdownMenuItem\n\nDropdownMenuItem\n\nView payment details\n\n</',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'DropdownMenuItem\n\n</DropdownMenuContent>\n\n</DropdownMenu>\n\n},\n\n},\n\n// ...\n\nCopy\n\nYou can access the row data using row.original in the cell function. Use this to handle actions for your row eg. use the id to make a DELETE call to your API.\n\nPagination\n\nNext, we\'ll add pagination to our table.\n\nUpdate <DataTable>\n\napp/payments/data-table.tsx\n\nimport {\n\nColumnDef,\n\nflexRender,\n\ngetCoreRowModel,\n\ngetPaginationRowModel,\n\nuseReactTable,\n\n} from "@tanstack/react-table"\n\nexport\n\nfunction\n\nDataTable\n\nTData\n\nTValue\n\n>({\n\ncolumns,\n\ndata,\n\n}:\n\nDataTableProps\n\nTData',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      "TValue\n\n>)\n\nconst\n\ntable\n\nuseReactTable\n\n({\n\ndata,\n\ncolumns,\n\ngetCoreRowModel: getCoreRowModel(),\n\ngetPaginationRowModel: getPaginationRowModel(),\n\n})\n\n// ...\n\nCopy\n\nThis will automatically paginate your rows into pages of 10. See the pagination docs for more information on customizing page size and implementing manual pagination.\n\nAdd pagination controls\n\nWe can add pagination controls to our table using the <Button /> component and the table.previousPage(), table.nextPage() API methods.\n\napp/payments/data-table.tsx\n\nimport\n\nButton",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'from\n\n"@/components/ui/button"\n\nexport\n\nfunction\n\nDataTable\n\nTData\n\nTValue\n\n>({\n\ncolumns,\n\ndata,\n\n}:\n\nDataTableProps\n\nTData\n\nTValue\n\n>)\n\nconst\n\ntable\n\nuseReactTable\n\n({\n\ndata,\n\ncolumns,\n\ngetCoreRowModel: getCoreRowModel(),\n\ngetPaginationRowModel: getPaginationRowModel(),\n\n})\n\nreturn (\n\n<div>\n\ndiv className\n\n"rounded-md border"\n\n<Table>\n\n{ // .... }\n\n</Table>\n\n</div>\n\ndiv className\n\n"flex items-center justify-end space-x-2 py-4"\n\n<Button\n\nvariant="outline"\n\nsize="sm"\n\nonClick\n\n={()\n\n=>\n\ntable\n\npreviousPage\n\n()}\n\ndisabled\n\n={!\n\ntable\n\ngetCanPreviousPage\n\n()}\n\nPrevious\n\n</Button>\n\n<Button\n\nvariant="outline"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'size="sm"\n\nonClick\n\n={()\n\n=>\n\ntable\n\nnextPage\n\n()}\n\ndisabled\n\n={!\n\ntable\n\ngetCanNextPage\n\n()}\n\nNext\n\n</Button>\n\n</div>\n\n</div>\n\nCopy\n\nSee Reusable Components section for a more advanced pagination component.\n\nSorting\n\nLet\'s make the email column sortable.\n\nUpdate <DataTable>\n\napp/payments/data-table.tsx\n\n"use client"\n\nimport\n\nas\n\nReact\n\nfrom\n\n"react"\n\nimport {\n\nColumnDef,\n\nSortingState,\n\nflexRender,\n\ngetCoreRowModel,\n\ngetPaginationRowModel,\n\ngetSortedRowModel,\n\nuseReactTable,\n\n} from "@tanstack/react-table"\n\nexport\n\nfunction\n\nDataTable\n\nTData\n\nTValue\n\n>({\n\ncolumns,\n\ndata,\n\n}:\n\nDataTableProps',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'TData\n\nTValue\n\n>)\n\nconst\n\nsorting\n\nsetSorting\n\nReact\n\nuseState\n\nSortingState\n\n>([])\n\nconst\n\ntable\n\nuseReactTable\n\n({\n\ndata,\n\ncolumns,\n\ngetCoreRowModel: getCoreRowModel(),\n\ngetPaginationRowModel: getPaginationRowModel(),\n\nonSortingChange: setSorting,\n\ngetSortedRowModel: getSortedRowModel(),\n\nstate: {\n\nsorting,\n\n},\n\n})\n\nreturn (\n\n<div>\n\ndiv className\n\n"rounded-md border"\n\nTable\n\n>{\n\n...\n\n}</\n\nTable\n\n</div>\n\n</div>\n\nCopy\n\nMake header cell sortable\n\nWe can now update the email header cell to add sorting controls.\n\napp/payments/columns.tsx\n\n"use client"\n\nimport\n\nColumnDef\n\nfrom\n\n"@tanstack/react-table"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'import\n\nArrowUpDown\n\nMoreHorizontal\n\nfrom\n\n"lucide-react"\n\nexport\n\nconst\n\ncolumns\n\nColumnDef\n\nPayment\n\n>[]\n\naccessorKey: "email",\n\nheader\n\n({\n\ncolumn\n\n})\n\n=>\n\nreturn (\n\n<Button\n\nvariant="ghost"\n\nonClick\n\n={()\n\n=>\n\ncolumn\n\ntoggleSorting\n\ncolumn\n\ngetIsSorted\n\n()\n\n===\n\n"asc"\n\n)}\n\nEmail\n\nArrowUpDown className\n\n"ml-2 h-4 w-4"\n\n/>\n\n</Button>\n\n},\n\n},\n\nCopy\n\nThis will automatically sort the table (asc and desc) when the user toggles on the header cell.\n\nFiltering\n\nLet\'s add a search input to filter emails in our table.\n\nUpdate <DataTable>\n\napp/payments/data-table.tsx\n\n"use client"\n\nimport\n\nas\n\nReact',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'from\n\n"react"\n\nimport {\n\nColumnDef,\n\nColumnFiltersState,\n\nSortingState,\n\nflexRender,\n\ngetCoreRowModel,\n\ngetFilteredRowModel,\n\ngetPaginationRowModel,\n\ngetSortedRowModel,\n\nuseReactTable,\n\n} from "@tanstack/react-table"\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nimport\n\nInput\n\nfrom\n\n"@/components/ui/input"\n\nexport\n\nfunction\n\nDataTable\n\nTData\n\nTValue\n\n>({\n\ncolumns,\n\ndata,\n\n}:\n\nDataTableProps\n\nTData\n\nTValue\n\n>)\n\nconst\n\nsorting\n\nsetSorting\n\nReact\n\nuseState\n\nSortingState\n\n>([])\n\nconst\n\ncolumnFilters\n\nsetColumnFilters\n\nReact\n\nuseState\n\nColumnFiltersState\n\n>(\n\n[]\n\nconst\n\ntable\n\nuseReactTable\n\n({\n\ndata,\n\ncolumns,\n\nonSortingChange: setSorting,\n\ngetCoreRowModel: getCoreRowModel(),\n\ngetPaginationRowModel: getPaginationRowModel(),\n\ngetSortedRowModel: getSortedRowModel(),\n\nonColumnFiltersChange: setColumnFilters,\n\ngetFilteredRowModel: getFilteredRowModel(),',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'state: {\n\nsorting,\n\ncolumnFilters,\n\n},\n\n})\n\nreturn (\n\n<div>\n\ndiv className\n\n"flex items-center py-4"\n\n<Input\n\nplaceholder="Filter emails..."\n\nvalue\n\n={(\n\ntable\n\ngetColumn\n\n"email"\n\n)?.\n\ngetFilterValue\n\n()\n\nas\n\nstring\n\n??\n\n""\n\nonChange\n\n={(\n\nevent\n\n=>\n\ntable\n\ngetColumn\n\n"email"\n\n)?.\n\nsetFilterValue\n\nevent\n\ntarget\n\nvalue\n\nclassName="max-w-sm"\n\n/>\n\n</div>\n\ndiv className\n\n"rounded-md border"\n\nTable\n\n>{\n\n...\n\n}</\n\nTable\n\n</div>\n\n</div>\n\nCopy\n\nFiltering is now enabled for the email column. You can add filters to other columns as well. See the filtering docs for more information on customizing filters.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'Visibility\n\nAdding column visibility is fairly simple using @tanstack/react-table visibility API.\n\nUpdate <DataTable>\n\napp/payments/data-table.tsx\n\n"use client"\n\nimport\n\nas\n\nReact\n\nfrom\n\n"react"\n\nimport {\n\nColumnDef,\n\nColumnFiltersState,\n\nSortingState,\n\nVisibilityState,\n\nflexRender,\n\ngetCoreRowModel,\n\ngetFilteredRowModel,\n\ngetPaginationRowModel,\n\ngetSortedRowModel,\n\nuseReactTable,\n\n} from "@tanstack/react-table"\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nimport {\n\nDropdownMenu,\n\nDropdownMenuCheckboxItem,\n\nDropdownMenuContent,\n\nDropdownMenuTrigger,\n\n} from "@/components/ui/dropdown-menu"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      "export\n\nfunction\n\nDataTable\n\nTData\n\nTValue\n\n>({\n\ncolumns,\n\ndata,\n\n}:\n\nDataTableProps\n\nTData\n\nTValue\n\n>)\n\nconst\n\nsorting\n\nsetSorting\n\nReact\n\nuseState\n\nSortingState\n\n>([])\n\nconst\n\ncolumnFilters\n\nsetColumnFilters\n\nReact\n\nuseState\n\nColumnFiltersState\n\n>(\n\n[]\n\nconst\n\ncolumnVisibility\n\nsetColumnVisibility\n\nReact\n\nuseState\n\nVisibilityState\n\n>({})\n\nconst\n\ntable\n\nuseReactTable\n\n({\n\ndata,\n\ncolumns,\n\nonSortingChange: setSorting,\n\nonColumnFiltersChange: setColumnFilters,\n\ngetCoreRowModel: getCoreRowModel(),\n\ngetPaginationRowModel: getPaginationRowModel(),\n\ngetSortedRowModel: getSortedRowModel(),\n\ngetFilteredRowModel: getFilteredRowModel(),\n\nonColumnVisibilityChange: setColumnVisibility,",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'state: {\n\nsorting,\n\ncolumnFilters,\n\ncolumnVisibility,\n\n},\n\n})\n\nreturn (\n\n<div>\n\ndiv className\n\n"flex items-center py-4"\n\n<Input\n\nplaceholder="Filter emails..."\n\nvalue\n\n={\n\ntable\n\ngetColumn\n\n"email"\n\n)?.\n\ngetFilterValue\n\n()\n\nas\n\nstring\n\nonChange\n\n={(\n\nevent\n\n=>\n\ntable\n\ngetColumn\n\n"email"\n\n)?.\n\nsetFilterValue\n\nevent\n\ntarget\n\nvalue\n\nclassName="max-w-sm"\n\n/>\n\n<DropdownMenu>\n\n<DropdownMenuTrigger asChild>\n\nButton variant\n\n"outline"\n\nclassName\n\n"ml-auto"\n\nColumns\n\n</Button>\n\n</DropdownMenuTrigger>\n\nDropdownMenuContent align\n\n"end"\n\n{table\n\n.getAllColumns()\n\n.filter(\n\ncolumn\n\n=>\n\ncolumn\n\ngetCanHide\n\n()\n\nmap\n\n((\n\ncolumn\n\n=>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'return (\n\n<DropdownMenuCheckboxItem\n\nkey\n\n={\n\ncolumn\n\nid\n\nclassName="capitalize"\n\nchecked\n\n={\n\ncolumn\n\ngetIsVisible\n\n()}\n\nonCheckedChange\n\n={(\n\nvalue\n\n=>\n\ncolumn\n\ntoggleVisibility\n\n(!!\n\nvalue\n\ncolumn\n\nid\n\n</DropdownMenuCheckboxItem>\n\n})}\n\n</DropdownMenuContent>\n\n</DropdownMenu>\n\n</div>\n\ndiv className\n\n"rounded-md border"\n\nTable\n\n>{\n\n...\n\n}</\n\nTable\n\n</div>\n\n</div>\n\nCopy\n\nThis adds a dropdown menu that you can use to toggle column visibility.\n\nRow Selection\n\nNext, we\'re going to add row selection to our table.\n\nUpdate column definitions\n\napp/payments/columns.tsx\n\n"use client"\n\nimport',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'ColumnDef\n\nfrom\n\n"@tanstack/react-table"\n\nimport\n\nBadge\n\nfrom\n\n"@/components/ui/badge"\n\nimport\n\nCheckbox\n\nfrom\n\n"@/components/ui/checkbox"\n\nexport\n\nconst\n\ncolumns\n\nColumnDef\n\nPayment\n\n>[]\n\nid: "select",\n\nheader\n\n({\n\ntable\n\n})\n\n=>\n\n<Checkbox\n\nchecked\n\n={\n\ntable\n\ngetIsAllPageRowsSelected\n\n()}\n\nonCheckedChange\n\n={(\n\nvalue\n\n=>\n\ntable\n\ntoggleAllPageRowsSelected\n\n(!!\n\nvalue\n\n)}\n\naria-label="Select all"\n\n/>\n\n),\n\ncell\n\n({\n\nrow\n\n})\n\n=>\n\n<Checkbox\n\nchecked\n\n={\n\nrow\n\ngetIsSelected\n\n()}\n\nonCheckedChange\n\n={(\n\nvalue\n\n=>\n\nrow\n\ntoggleSelected\n\n(!!\n\nvalue\n\n)}\n\naria-label="Select row"\n\n/>\n\n),\n\nenableSorting: false,\n\nenableHiding: false,\n\n},\n\nCopy',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      "Update <DataTable>\n\napp/payments/data-table.tsx\n\nexport\n\nfunction\n\nDataTable\n\nTData\n\nTValue\n\n>({\n\ncolumns,\n\ndata,\n\n}:\n\nDataTableProps\n\nTData\n\nTValue\n\n>)\n\nconst\n\nsorting\n\nsetSorting\n\nReact\n\nuseState\n\nSortingState\n\n>([])\n\nconst\n\ncolumnFilters\n\nsetColumnFilters\n\nReact\n\nuseState\n\nColumnFiltersState\n\n>(\n\n[]\n\nconst\n\ncolumnVisibility\n\nsetColumnVisibility\n\nReact\n\nuseState\n\nVisibilityState\n\n>({})\n\nconst\n\nrowSelection\n\nsetRowSelection\n\nReact\n\nuseState\n\n({})\n\nconst\n\ntable\n\nuseReactTable\n\n({\n\ndata,\n\ncolumns,\n\nonSortingChange: setSorting,\n\nonColumnFiltersChange: setColumnFilters,\n\ngetCoreRowModel: getCoreRowModel(),\n\ngetPaginationRowModel: getPaginationRowModel(),\n\ngetSortedRowModel: getSortedRowModel(),\n\ngetFilteredRowModel: getFilteredRowModel(),\n\nonColumnVisibilityChange: setColumnVisibility,\n\nonRowSelectionChange: setRowSelection,",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'state: {\n\nsorting,\n\ncolumnFilters,\n\ncolumnVisibility,\n\nrowSelection,\n\n},\n\n})\n\nreturn (\n\n<div>\n\ndiv className\n\n"rounded-md border"\n\n<Table />\n\n</div>\n\n</div>\n\nCopy\n\nThis adds a checkbox to each row and a checkbox in the header to select all rows.\n\nShow selected rows\n\nYou can show the number of selected rows using the table.getFilteredSelectedRowModel() API.\n\n<div className="flex-1 text-sm text-muted-foreground">\n\ntable\n\ngetFilteredSelectedRowModel\n\n().\n\nrows\n\nlength\n\nof\n\n" "\n\ntable\n\ngetFilteredRowModel\n\n().\n\nrows\n\nlength\n\nrow(s) selected.\n\n</div>\n\nCopy\n\nReusable Components\n\nHere are some components you can use to build your data tables. This is from the Tasks demo.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'Column header\n\nMake any column header sortable and hideable.\n\nimport {\n\nArrowDownIcon,\n\nArrowUpIcon,\n\nCaretSortIcon,\n\nEyeNoneIcon,\n\n} from "@radix-ui/react-icons"\n\nimport\n\nColumn\n\nfrom\n\n"@tanstack/react-table"\n\nimport\n\ncn\n\nfrom\n\n"@/lib/utils"\n\nimport\n\nButton\n\nfrom\n\n"@/registry/new-york/ui/button"\n\nimport {\n\nDropdownMenu,\n\nDropdownMenuContent,\n\nDropdownMenuItem,\n\nDropdownMenuSeparator,\n\nDropdownMenuTrigger,\n\n} from "@/registry/new-york/ui/dropdown-menu"\n\ninterface\n\nDataTableColumnHeaderProps\n\nTData\n\nTValue\n\nextends\n\nReact\n\nHTMLAttributes\n\nHTMLDivElement\n\ncolumn\n\nColumn',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'TData\n\nTValue\n\ntitle: string\n\nexport\n\nfunction\n\nDataTableColumnHeader\n\nTData\n\nTValue\n\n>({\n\ncolumn,\n\ntitle,\n\nclassName,\n\n}:\n\nDataTableColumnHeaderProps\n\nTData\n\nTValue\n\n>)\n\nif\n\n(!\n\ncolumn\n\ngetCanSort\n\n())\n\nreturn\n\ndiv className\n\n={\n\ncn\n\nclassName\n\n)}>{\n\ntitle\n\n}</\n\ndiv\n\nreturn (\n\ndiv className\n\n={\n\ncn\n\n"flex items-center space-x-2"\n\nclassName\n\n)}>\n\n<DropdownMenu>\n\n<DropdownMenuTrigger asChild>\n\n<Button\n\nvariant="ghost"\n\nsize="sm"\n\nclassName="-ml-3 h-8 data-[state=open]:bg-accent"\n\nspan\n\n>{\n\ntitle\n\n}</\n\nspan\n\ncolumn\n\ngetIsSorted\n\n()\n\n===\n\n"desc"\n\nArrowDownIcon className\n\n"ml-2 h-4 w-4"\n\n/>\n\ncolumn\n\ngetIsSorted\n\n()\n\n===',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      '"asc"\n\nArrowUpIcon className\n\n"ml-2 h-4 w-4"\n\n/>\n\nCaretSortIcon className\n\n"ml-2 h-4 w-4"\n\n/>\n\n)}\n\n</Button>\n\n</DropdownMenuTrigger>\n\nDropdownMenuContent align\n\n"start"\n\nDropdownMenuItem onClick\n\n={()\n\n=>\n\ncolumn\n\ntoggleSorting\n\n(false)}>\n\nArrowUpIcon className\n\n"mr-2 h-3.5 w-3.5 text-muted-foreground/70"\n\n/>\n\nAsc\n\n</DropdownMenuItem>\n\nDropdownMenuItem onClick\n\n={()\n\n=>\n\ncolumn\n\ntoggleSorting\n\n(true)}>\n\nArrowDownIcon className\n\n"mr-2 h-3.5 w-3.5 text-muted-foreground/70"\n\n/>\n\nDesc\n\n</DropdownMenuItem>\n\n<DropdownMenuSeparator />\n\nDropdownMenuItem onClick\n\n={()\n\n=>\n\ncolumn',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'toggleVisibility\n\n(false)}>\n\nEyeNoneIcon className\n\n"mr-2 h-3.5 w-3.5 text-muted-foreground/70"\n\n/>\n\nHide\n\n</DropdownMenuItem>\n\n</DropdownMenuContent>\n\n</DropdownMenu>\n\n</div>\n\nCopy\n\nexport\n\nconst\n\ncolumns\n\naccessorKey: "email",\n\nheader\n\n({\n\ncolumn\n\n})\n\n=>\n\nDataTableColumnHeader column\n\n={\n\ncolumn\n\ntitle\n\n"Email"\n\n/>\n\n),\n\n},\n\nCopy\n\nPagination\n\nAdd pagination controls to your table including page size and selection count.\n\nimport {\n\nChevronLeftIcon,\n\nChevronRightIcon,\n\nDoubleArrowLeftIcon,\n\nDoubleArrowRightIcon,\n\n} from "@radix-ui/react-icons"\n\nimport\n\nTable\n\nfrom\n\n"@tanstack/react-table"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'import\n\nButton\n\nfrom\n\n"@/registry/new-york/ui/button"\n\nimport {\n\nSelect,\n\nSelectContent,\n\nSelectItem,\n\nSelectTrigger,\n\nSelectValue,\n\n} from "@/registry/new-york/ui/select"\n\ninterface\n\nDataTablePaginationProps\n\nTData\n\ntable\n\nTable\n\nTData\n\nexport\n\nfunction\n\nDataTablePagination\n\nTData\n\n>({\n\ntable,\n\n}:\n\nDataTablePaginationProps\n\nTData\n\n>)\n\nreturn (\n\ndiv className\n\n"flex items-center justify-between px-2"\n\ndiv className\n\n"flex-1 text-sm text-muted-foreground"\n\ntable\n\ngetFilteredSelectedRowModel\n\n().\n\nrows\n\nlength\n\nof\n\n" "\n\ntable\n\ngetFilteredRowModel\n\n().\n\nrows\n\nlength\n\nrow(s) selected.\n\n</div>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'div className\n\n"flex items-center space-x-6 lg:space-x-8"\n\ndiv className\n\n"flex items-center space-x-2"\n\np className\n\n"text-sm font-medium"\n\nRows per page\n\n</\n\n<Select\n\nvalue\n\n={\n\n`${\n\ntable\n\ngetState\n\n().\n\npagination\n\npageSize\n\n}`\n\nonValueChange\n\n={(\n\nvalue\n\n=>\n\ntable\n\nsetPageSize\n\nNumber\n\nvalue\n\n))\n\n}}\n\nSelectTrigger className\n\n"h-8 w-[70px]"\n\nSelectValue placeholder\n\n={\n\ntable\n\ngetState\n\n().\n\npagination\n\npageSize\n\n/>\n\n</SelectTrigger>\n\nSelectContent side\n\n"top"\n\n{[10,\n\n20,\n\n30,\n\n40,\n\n50].\n\nmap\n\n((\n\npageSize\n\n=>\n\nSelectItem key\n\n={\n\npageSize\n\nvalue\n\n={\n\n`${\n\npageSize\n\n}`\n\n}>\n\n{pageSize}\n\n</SelectItem>\n\n))}\n\n</SelectContent>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      '</Select>\n\n</div>\n\ndiv className\n\n"flex w-[100px] items-center justify-center text-sm font-medium"\n\nPage\n\ntable\n\ngetState\n\n().\n\npagination\n\npageIndex\n\n1}\n\nof\n\n" "\n\ntable\n\ngetPageCount\n\n()}\n\n</div>\n\ndiv className\n\n"flex items-center space-x-2"\n\n<Button\n\nvariant="outline"\n\nclassName="hidden h-8 w-8 p-0 lg:flex"\n\nonClick\n\n={()\n\n=>\n\ntable\n\nsetPageIndex\n\n(0)}\n\ndisabled\n\n={!\n\ntable\n\ngetCanPreviousPage\n\n()}\n\nspan className\n\n"sr-only"\n\nGo to first page\n\n</\n\nspan\n\nDoubleArrowLeftIcon className\n\n"h-4 w-4"\n\n/>\n\n</Button>\n\n<Button\n\nvariant="outline"\n\nclassName="h-8 w-8 p-0"\n\nonClick\n\n={()\n\n=>\n\ntable\n\npreviousPage\n\n()}',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'disabled\n\n={!\n\ntable\n\ngetCanPreviousPage\n\n()}\n\nspan className\n\n"sr-only"\n\nGo to previous page\n\n</\n\nspan\n\nChevronLeftIcon className\n\n"h-4 w-4"\n\n/>\n\n</Button>\n\n<Button\n\nvariant="outline"\n\nclassName="h-8 w-8 p-0"\n\nonClick\n\n={()\n\n=>\n\ntable\n\nnextPage\n\n()}\n\ndisabled\n\n={!\n\ntable\n\ngetCanNextPage\n\n()}\n\nspan className\n\n"sr-only"\n\nGo to next page\n\n</\n\nspan\n\nChevronRightIcon className\n\n"h-4 w-4"\n\n/>\n\n</Button>\n\n<Button\n\nvariant="outline"\n\nclassName="hidden h-8 w-8 p-0 lg:flex"\n\nonClick\n\n={()\n\n=>\n\ntable\n\nsetPageIndex\n\ntable\n\ngetPageCount\n\n()\n\n1)}\n\ndisabled\n\n={!\n\ntable\n\ngetCanNextPage\n\n()}\n\nspan className\n\n"sr-only"\n\nGo to last page\n\n</',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'span\n\nDoubleArrowRightIcon className\n\n"h-4 w-4"\n\n/>\n\n</Button>\n\n</div>\n\n</div>\n\n</div>\n\nCopy\n\nDataTablePagination table\n\n={\n\ntable\n\n/>\n\nCopy\n\nColumn toggle\n\nA component to toggle column visibility.\n\n"use client"\n\nimport\n\nDropdownMenuTrigger\n\nfrom\n\n"@radix-ui/react-dropdown-menu"\n\nimport\n\nMixerHorizontalIcon\n\nfrom\n\n"@radix-ui/react-icons"\n\nimport\n\nTable\n\nfrom\n\n"@tanstack/react-table"\n\nimport\n\nButton\n\nfrom\n\n"@/registry/new-york/ui/button"\n\nimport {\n\nDropdownMenu,\n\nDropdownMenuCheckboxItem,\n\nDropdownMenuContent,\n\nDropdownMenuLabel,\n\nDropdownMenuSeparator,\n\n} from "@/registry/new-york/ui/dropdown-menu"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'interface\n\nDataTableViewOptionsProps\n\nTData\n\ntable\n\nTable\n\nTData\n\nexport\n\nfunction\n\nDataTableViewOptions\n\nTData\n\n>({\n\ntable,\n\n}:\n\nDataTableViewOptionsProps\n\nTData\n\n>)\n\nreturn (\n\n<DropdownMenu>\n\n<DropdownMenuTrigger asChild>\n\n<Button\n\nvariant="outline"\n\nsize="sm"\n\nclassName="ml-auto hidden h-8 lg:flex"\n\nMixerHorizontalIcon className\n\n"mr-2 h-4 w-4"\n\n/>\n\nView\n\n</Button>\n\n</DropdownMenuTrigger>\n\nDropdownMenuContent align\n\n"end"\n\nclassName\n\n"w-[150px]"\n\nDropdownMenuLabel\n\nToggle columns\n\n</\n\nDropdownMenuLabel\n\n<DropdownMenuSeparator />\n\n{table\n\n.getAllColumns()\n\n.filter(\n\ncolumn\n\n=>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/data-table",
      title: "data-table components",
    },
    pageContent:
      'typeof\n\ncolumn\n\naccessorFn\n\n!==\n\n"undefined"\n\n&&\n\ncolumn\n\ngetCanHide\n\n()\n\nmap\n\n((\n\ncolumn\n\n=>\n\nreturn (\n\n<DropdownMenuCheckboxItem\n\nkey\n\n={\n\ncolumn\n\nid\n\nclassName="capitalize"\n\nchecked\n\n={\n\ncolumn\n\ngetIsVisible\n\n()}\n\nonCheckedChange\n\n={(\n\nvalue\n\n=>\n\ncolumn\n\ntoggleVisibility\n\n(!!\n\nvalue\n\n)}\n\ncolumn\n\nid\n\n</DropdownMenuCheckboxItem>\n\n})}\n\n</DropdownMenuContent>\n\n</DropdownMenu>\n\nCopy\n\nDataTableViewOptions table\n\n={\n\ntable\n\n/>\n\nCopy\n\nContext Menu\n\nDate Picker',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/dropdown-menu",
      title: "dropdown-menu components",
    },
    pageContent:
      'Docs\n\nDropdown Menu\n\nDropdown Menu\n\nDisplays a menu to the user \u2014 such as a set of actions or functions \u2014 triggered by a button.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ndropdown-menu\n\nCopy\n\nUsage\n\nimport {\n\nDropdownMenu,\n\nDropdownMenuContent,\n\nDropdownMenuItem,\n\nDropdownMenuLabel,\n\nDropdownMenuSeparator,\n\nDropdownMenuTrigger,\n\n} from "@/components/ui/dropdown-menu"\n\nCopy\n\n<DropdownMenu>\n\nDropdownMenuTrigger\n\nOpen\n\n</\n\nDropdownMenuTrigger\n\n<DropdownMenuContent>\n\nDropdownMenuLabel\n\nMy Account\n\n</\n\nDropdownMenuLabel\n\n<DropdownMenuSeparator />',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/dropdown-menu",
      title: "dropdown-menu components",
    },
    pageContent:
      "DropdownMenuItem\n\nProfile\n\n</\n\nDropdownMenuItem\n\nDropdownMenuItem\n\nBilling\n\n</\n\nDropdownMenuItem\n\nDropdownMenuItem\n\nTeam\n\n</\n\nDropdownMenuItem\n\nDropdownMenuItem\n\nSubscription\n\n</\n\nDropdownMenuItem\n\n</DropdownMenuContent>\n\n</DropdownMenu>\n\nCopy\n\nExamples\n\nCheckboxes\n\nStyle:\n\nRadio Group\n\nStyle:\n\nDialog\n\nForm",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/scroll-area",
      title: "scroll-area components",
    },
    pageContent:
      "Docs\n\nScroll-area\n\nScroll-area\n\nAugments native scroll functionality for custom, cross-browser styling.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nTags\n\nv1.2.0-beta.50\n\nv1.2.0-beta.49\n\nv1.2.0-beta.48\n\nv1.2.0-beta.47\n\nv1.2.0-beta.46\n\nv1.2.0-beta.45\n\nv1.2.0-beta.44\n\nv1.2.0-beta.43\n\nv1.2.0-beta.42\n\nv1.2.0-beta.41\n\nv1.2.0-beta.40\n\nv1.2.0-beta.39\n\nv1.2.0-beta.38\n\nv1.2.0-beta.37\n\nv1.2.0-beta.36\n\nv1.2.0-beta.35\n\nv1.2.0-beta.34\n\nv1.2.0-beta.33\n\nv1.2.0-beta.32\n\nv1.2.0-beta.31\n\nv1.2.0-beta.30\n\nv1.2.0-beta.29\n\nv1.2.0-beta.28\n\nv1.2.0-beta.27\n\nv1.2.0-beta.26\n\nv1.2.0-beta.25\n\nv1.2.0-beta.24\n\nv1.2.0-beta.23\n\nv1.2.0-beta.22\n\nv1.2.0-beta.21\n\nv1.2.0-beta.20\n\nv1.2.0-beta.19\n\nv1.2.0-beta.18\n\nv1.2.0-beta.17\n\nv1.2.0-beta.16\n\nv1.2.0-beta.15\n\nv1.2.0-beta.14\n\nv1.2.0-beta.13\n\nv1.2.0-beta.12\n\nv1.2.0-beta.11\n\nv1.2.0-beta.10\n\nv1.2.0-beta.9\n\nv1.2.0-beta.8\n\nv1.2.0-beta.7\n\nv1.2.0-beta.6\n\nv1.2.0-beta.5\n\nv1.2.0-beta.4\n\nv1.2.0-beta.3\n\nv1.2.0-beta.2\n\nv1.2.0-beta.1",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/scroll-area",
      title: "scroll-area components",
    },
    pageContent:
      "Installation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nscroll-area\n\nCopy\n\nUsage\n\nimport\n\nScrollArea\n\nfrom\n\n\"@/components/ui/scroll-area\"\n\nCopy\n\n<ScrollArea className=\"h-[200px] w-[350px] rounded-md border p-4\">\n\nJokester began sneaking into the castle in the middle of the night and leaving\n\njokes all over the place: under the king's pillow, in his soup, even in the\n\nroyal toilet. The king was furious, but he couldn't seem to stop Jokester. And\n\nthen, one day, the people of the kingdom discovered that the jokes left by\n\nJokester were so funny that they couldn't help but laugh. And once they\n\nstarted laughing, they couldn't stop.",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/scroll-area",
      title: "scroll-area components",
    },
    pageContent: "</ScrollArea>\n\nCopy\n\nRadio Group\n\nSelect",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/sheet",
      title: "sheet components",
    },
    pageContent:
      'Docs\n\nSheet\n\nSheet\n\nExtends the Dialog component to display content that complements the main content of the screen.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nsheet\n\nCopy\n\nUsage\n\nimport {\n\nSheet,\n\nSheetContent,\n\nSheetDescription,\n\nSheetHeader,\n\nSheetTitle,\n\nSheetTrigger,\n\n} from "@/components/ui/sheet"\n\nCopy\n\n<Sheet>\n\nSheetTrigger\n\nOpen\n\n</\n\nSheetTrigger\n\n<SheetContent>\n\n<SheetHeader>\n\nSheetTitle\n\nAre you sure absolutely sure?\n\n</\n\nSheetTitle\n\n<SheetDescription>\n\nThis action cannot be undone. This will permanently delete your account\n\nand remove your data from our servers.',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/sheet",
      title: "sheet components",
    },
    pageContent:
      '</SheetDescription>\n\n</SheetHeader>\n\n</SheetContent>\n\n</Sheet>\n\nCopy\n\nExamples\n\nSide\n\nStyle:\n\nSize\n\nYou can adjust the size of the sheet using CSS classes:\n\n<Sheet>\n\nSheetTrigger\n\nOpen\n\n</\n\nSheetTrigger\n\nSheetContent className\n\n"w-[400px] sm:w-[540px]"\n\n<SheetHeader>\n\nSheetTitle\n\nAre you sure absolutely sure?\n\n</\n\nSheetTitle\n\n<SheetDescription>\n\nThis action cannot be undone. This will permanently delete your account\n\nand remove your data from our servers.\n\n</SheetDescription>\n\n</SheetHeader>\n\n</SheetContent>\n\n</Sheet>\n\nCopy\n\nSeparator\n\nSkeleton',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/vite",
      title: "vite installation",
    },
    pageContent:
      'Docs\n\nVite\n\nVite\n\nInstall and configure Vite.\n\nCreate project\n\nStart by creating a new React project using vite:\n\nnpm create vite@latest\n\nCopy\n\nAdd Tailwind and its configuration\n\nInstall tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:\n\nnpm\n\ninstall\n\nD\n\ntailwindcss\n\npostcss\n\nautoprefixer\n\nnpx\n\ntailwindcss\n\ninit\n\np\n\nCopy\n\nEdit tsconfig.json\n\nAdd the code below to the compilerOptions of your tsconfig.json so your app can resolve paths without error\n\n"baseUrl": ".",\n\n"paths": {\n\n"@/*"\n\n"./src/*"',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/vite",
      title: "vite installation",
    },
    pageContent:
      'Copy\n\nUpdate vite.config.ts\n\nAdd the code below to the vite.config.ts so your app can resolve paths without error\n\n# (so you can import "path" without error)\n\nnpm\n\nD\n\n@types/node\n\nCopy\n\nimport path from "path"\n\nimport react from "@vitejs/plugin-react"\n\nimport\n\ndefineConfig\n\nfrom\n\n"vite"\n\nexport default defineConfig({\n\nplugins\n\nreact\n\n()],\n\nresolve: {\n\nalias: {\n\n"@"\n\npath\n\nresolve\n\n__dirname\n\n"./src"\n\n),\n\n},\n\n},\n\n})\n\nCopy\n\nRun the CLI\n\nRun the shadcn-ui init command to setup your project:\n\nnpx shadcn-ui@latest init\n\nCopy\n\nConfigure components.json\n\nYou will be asked a few questions to configure components.json:\n\nWould you like to use TypeScript (recommended)? no / yes\n\nWhich style would you like to use? \u203a Default\n\nWhich color would you like to use as base color? \u203a Slate\n\nWhere is your global CSS file? \u203a \u203a src/index.css\n\nDo you want to use CSS variables for colors? \u203a no / yes\n\nWhere is your tailwind.config.js located? \u203a tailwind.config.js',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/installation/vite",
      title: "vite installation",
    },
    pageContent:
      'Configure the import alias for components: \u203a @/components\n\nConfigure the import alias for utils: \u203a @/lib/utils\n\nAre you using React Server Components? \u203a no / yes (no)\n\nCopy\n\nThat\'s it\n\nYou can now start adding components to your project.\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nbutton\n\nCopy\n\nThe command above will add the Button component to your project. You can then import it like this:\n\nimport\n\nButton\n\nfrom\n\n"@/components/ui/button"\n\nexport\n\ndefault\n\nfunction\n\nHome\n\n()\n\nreturn (\n\n<div>\n\nButton\n\nClick me\n\n</\n\nButton\n\n</div>\n\nCopy\n\nNext.js\n\nRemix',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/navigation-menu",
      title: "navigation-menu components",
    },
    pageContent:
      'Docs\n\nNavigation Menu\n\nNavigation Menu\n\nA collection of links for navigating websites.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nGetting started\n\nComponents\n\nDocumentation\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nnavigation-menu\n\nCopy\n\nUsage\n\nimport {\n\nNavigationMenu,\n\nNavigationMenuContent,\n\nNavigationMenuIndicator,\n\nNavigationMenuItem,\n\nNavigationMenuLink,\n\nNavigationMenuList,\n\nNavigationMenuTrigger,\n\nNavigationMenuViewport,\n\n} from "@/components/ui/navigation-menu"\n\nCopy\n\n<NavigationMenu>\n\n<NavigationMenuList>\n\n<NavigationMenuItem>\n\nNavigationMenuTrigger\n\nItem One\n\n</',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/navigation-menu",
      title: "navigation-menu components",
    },
    pageContent:
      'NavigationMenuTrigger\n\n<NavigationMenuContent>\n\nNavigationMenuLink\n\nLink\n\n</\n\nNavigationMenuLink\n\n</NavigationMenuContent>\n\n</NavigationMenuItem>\n\n</NavigationMenuList>\n\n</NavigationMenu>\n\nCopy\n\nExamples\n\nLink Component\n\nWhen using the Next.js <Link /> component, you can use navigationMenuTriggerStyle() to apply the correct styles to the trigger.\n\nimport\n\nnavigationMenuTriggerStyle\n\nfrom\n\n"@/components/ui/navigation-menu"\n\nCopy\n\n<NavigationMenuItem>\n\nLink href\n\n"/docs"\n\nlegacyBehavior passHref\n\nNavigationMenuLink className\n\n={\n\nnavigationMenuTriggerStyle\n\n()}>',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/navigation-menu",
      title: "navigation-menu components",
    },
    pageContent:
      "Documentation\n\n</NavigationMenuLink>\n\n</Link>\n\n</NavigationMenuItem>\n\nCopy\n\nSee also the Radix UI documentation for handling client side routing.\n\nMenubar\n\nPopover",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/textarea",
      title: "textarea components",
    },
    pageContent:
      'Docs\n\nTextarea\n\nTextarea\n\nDisplays a form textarea or a component that looks like a textarea.\n\nStyle:\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\ntextarea\n\nCopy\n\nUsage\n\nimport\n\nTextarea\n\nfrom\n\n"@/components/ui/textarea"\n\nCopy\n\n<Textarea />\n\nCopy\n\nExamples\n\nDefault\n\nStyle:\n\nDisabled\n\nStyle:\n\nWith Label\n\nStyle:\n\nWith Text\n\nStyle:\n\nYour message will be copied to the support team.\n\nWith Button\n\nStyle:\n\nForm\n\nStyle:\n\nYou can @mention other users and organizations.\n\nTabs\n\nToast',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/alert",
      title: "alert components",
    },
    pageContent:
      'Docs\n\nAlert\n\nAlert\n\nDisplays a callout for user attention.\n\nStyle:\n\nHeads up!\n\nYou can add components to your app using the cli.\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nalert\n\nCopy\n\nUsage\n\nimport\n\nAlert\n\nAlertDescription\n\nAlertTitle\n\nfrom\n\n"@/components/ui/alert"\n\nCopy\n\n<Alert>\n\nTerminal className\n\n"h-4 w-4"\n\n/>\n\nAlertTitle\n\nHeads up!\n\n</\n\nAlertTitle\n\n<AlertDescription>\n\nYou can add components and dependencies to your app using the cli.\n\n</AlertDescription>\n\n</Alert>\n\nCopy\n\nExamples\n\nDefault\n\nStyle:\n\nHeads up!\n\nYou can add components to your app using the cli.\n\nDestructive',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/alert",
      title: "alert components",
    },
    pageContent:
      "Style:\n\nError\n\nYour session has expired. Please log in again.\n\nAccordion\n\nAlert Dialog",
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/select",
      title: "select components",
    },
    pageContent:
      'Docs\n\nSelect\n\nSelect\n\nDisplays a list of options for the user to pick from\u2014triggered by a button.\n\nRadix UI\n\nAPI Reference\n\nStyle:\n\nSelect a fruit\n\nInstallation\n\nnpx\n\nshadcn-ui@latest\n\nadd\n\nselect\n\nCopy\n\nUsage\n\nimport {\n\nSelect,\n\nSelectContent,\n\nSelectItem,\n\nSelectTrigger,\n\nSelectValue,\n\n} from "@/components/ui/select"\n\nCopy\n\n<Select>\n\nSelectTrigger className\n\n"w-[180px]"\n\nSelectValue placeholder\n\n"Theme"\n\n/>\n\n</SelectTrigger>\n\n<SelectContent>\n\nSelectItem value\n\n"light"\n\nLight\n\n</\n\nSelectItem\n\nSelectItem value\n\n"dark"\n\nDark\n\n</\n\nSelectItem\n\nSelectItem value\n\n"system"\n\nSystem\n\n</\n\nSelectItem',
  },
  {
    metadata: {
      source: "https://ui.shadcn.com/docs/components/select",
      title: "select components",
    },
    pageContent:
      "</SelectContent>\n\n</Select>\n\nCopy\n\nExamples\n\nForm\n\nStyle:\n\nSelect a verified email to display\n\nYou can manage email addresses in your email settings.\n\nScroll Area\n\nSeparator",
  },
  {
    metadata: { source: "https://ui.shadcn.com/docs", title: "summary" },
    pageContent:
      'All available sections in this document: ["vite dark-mode", "input components", "cli", "gatsby installation", "separator components", "table components", "form components", "hover-card components", "textarea components", "alert components", "remix installation", "collapsible components", "menubar components", "accordion components", "laravel installation", "date-picker components", "data-table components", "switch components", "calendar components", "aspect-ratio components", "select components", "about", "components-json", "dark-mode", "context-menu components", "installation", "dialog components", "card components", "manual installation", "command components", "next dark-mode", "radio-group components", "dropdown-menu components", "scroll-area components", "sheet components", "toggle components", "navigation-menu components", "button components", "combobox components", "astro installation", "alert-dialog components", "slider components", "tabs components", "toast components", "vite installation", "badge components", "figma", "next installation", "progress components", "typography components", "theming", "avatar components", "checkbox components", "popover components", "skeleton components", "label components", "summary", "tooltip components", "changelog"]',
  },
];
