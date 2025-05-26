{
  mkShell,
  alejandra,
  nodejs,
  pnpm,
}:
mkShell rec {
  name = "nuxt-travel-app";

  packages = [
    nodejs
    pnpm

    # Required for CI for format checking.
    alejandra
  ];
}
