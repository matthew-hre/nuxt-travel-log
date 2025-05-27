{
  mkShell,
  alejandra,
  nodejs,
  pnpm,
  sqld,
  turso-cli,
}:
mkShell rec {
  name = "nuxt-travel-app";

  packages = [
    nodejs
    pnpm

    # db
    sqld
    turso-cli

    # Required for CI for format checking.
    alejandra
  ];
}
