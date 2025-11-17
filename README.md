# Agilit Mobile

Aplicativo Expo voltado para simular o acompanhamento de propostas e empréstimos do Samuel dentro do ecossistema Agilit. O projeto usa **Expo SDK 54 (~54.0.6)** com React Native 0.81, Expo Router e NativeWind.

## DEVs:
<a href="https://github.com/SamuellRock">Samuel Rock</a>
<a href="https://github.com/bercezar">Bernardo Cezar</a>

## Stack principal
- Expo + React Native (SDK 54 / `expo@~54.0.6`)
- Expo Router para navegação multi-stack
- NativeWind/TailwindCSS para estilização
- Context API + AsyncStorage para autenticação mockada

## Pré-requisitos
1. Node.js **>= 18.18** (recomendado Node 20 LTS) e npm 10+.  
2. Ambiente compatível com Expo: macOS, Windows nativo ou WSL **2** (WSL 1 não é suportado pelo bundler).  
3. Expo CLI disponível via `npx expo` (instalado automaticamente no `npm install`).  
4. Emulador Android/iOS ou aplicativo Expo Go para testes físicos.

## Como instalar (obrigatório rodar `npm install`)
1. Clone ou atualize o repositório.
2. No diretório `agilit-mobile`, execute:
   ```bash
   rm -rf node_modules package-lock.json   # remove resíduos antigos
   npm install                             # insta a matriz correta (expo 54.0.6 + react 19.1.0)
   ```
   O `package-lock.json` será recriado automaticamente com os pares exatos exigidos pelo SDK 54.  
3. Se você vir o erro `npm ERR! ERESOLVE could not resolve`, certifique-se de que não restou nenhum `package-lock.json` antigo e que está usando Node 18.18+; depois repita o `npm install`.

### Diagnóstico rápido
Após instalar, confira se tudo está consistente:
```bash
npx expo-doctor           # valida SDK/versões
npm run lint              # roda o lint do Expo
```

## Como executar (com suporte a túnel)
- Desenvolvimento local padrão:
  ```bash
  npm run start
  ```
- Para expor via Expo túnel (útil quando o dispositivo está em outra rede):
  ```bash
  npm run start -- --tunnel
  ```
  Aguarde a mensagem `Tunnel ready` e escaneie o QR Code com o Expo Go.  
- Outros atalhos: `npm run android`, `npm run ios`, `npm run web`.
  
Se o Metro travar ou trocar de conta, use `npx expo start --clear` para limpar caches.
  
> Se notar mensagens sobre versões do React (19.1.x vs 19.2.x), rode `npm install react@19.1.0 react-dom@19.1.0` para alinhar novamente.

## Estrutura
```
app/        # rotas Expo Router (auth, credor, devedor)
src/
  components/   # UI compartilhada
  context/      # AuthContext com AsyncStorage
  data/         # mocks de ofertas/contratos
  utils/        # formatadores
global.css      # entry tailwind/nativewind
tailwind.config.js
```

## Solução de problemas
- **Erro “WSL 1 is not supported”**: execute a partir de WSL 2 ou diretamente no Windows/macOS.  
- **Inconsistência de versões**: rode `npm install` novamente ou `npx expo install <pacote>` para alinhar às versões do SDK 54.  
- **Caches**: `rm -rf .expo .expo-shared` e `npx expo start --clear` costumam resolver problemas após atualizações.

Com isso o projeto fica pronto para os fluxos de credor/devedor com o tema e os componentes personalizados. Divirta-se! 🎯
