### Environnement

- Télécharger Nodejs au lien [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Créer projet React Native avec les commandes

```
npx create-expo-app AwesomeProject
cd AwesomeProject
npx expo start
```

- Installer Expo GO sur téléphone et scanner le QR code

### React Native
Documentation: [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)


### Remarques

#### Liens images
Certains liens vers les images ne fonctionnent plus car le TP a été écrit il y a longtemps. Dans ce repo j'ai mis des liens vers des images randoms mais tous les liens sont fonctionnels. 

#### Q8: TP1

La librairie utilisée dans l'énoncé du TP date de la seconde guerre mondiale et n'est plus maintenue donc ne fonctionne pas avec la dernière version de React Native. Pour faire un formulaire on peut utiliser formik ([https://github.com/jaredpalmer/formik](https://github.com/jaredpalmer/formik)) à la place.

Si développement en local (VScode/Jetbrains) et pas sur Snack Expo, lancer la commande pour avoir les formulaires avec formik
```
npm install formik react-native-paper
``` 