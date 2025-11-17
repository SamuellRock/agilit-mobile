const nativewind = require("nativewind/babel");

module.exports = function (api) {
  api.cache(true);

  // NativeWind expõe um preset completo com vários plugins internos e,
  // nas versões mais recentes do Babel, não é mais permitido retornar `.plugins`
  // diretamente a partir de um plugin. Geramos a lista de plugins do preset e
  // filtramos o plugin de worklets para evitar conflito com o plugin do Reanimated.
  const { plugins: nativewindPlugins = [] } = nativewind() || {};
  const sanitizedPlugins = nativewindPlugins.filter((plugin) => {
    const name = Array.isArray(plugin) ? plugin[0] : plugin;
    return name !== "react-native-worklets/plugin";
  });

  return {
    presets: ["babel-preset-expo"],
    plugins: [...sanitizedPlugins, "react-native-reanimated/plugin"], // <-- DEVE SER O ÚLTIMO
  };
};
