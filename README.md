## 기본 기능

<br>

<table>
  <tr>
    <td>
      <p> 할 일 추가 : 버튼 클릭, 키보드 엔터로 동작</p>
      <img src="https://github.com/jypark38/wanted-todolist/assets/126536351/2bf0cfb6-c1c8-4dbb-bb0b-c6856d7e06a6" >
    </td>
    <td>
      <p> 할 일 삭제 </p>
      <img src="https://github.com/jypark38/wanted-todolist/assets/126536351/506797ca-445d-4326-a1ed-17f03d1cce49">
    </td>
  </tr>
</table>

<br>

---

## 추가 사항

### 반응형

<table>
  <tr>
    <td>
      <img width="722" alt="view" src="https://github.com/jypark38/wanted-todolist/assets/126536351/3be97e4d-9e64-4e66-946b-b6e0c66e65fd">
    </td>
    <td>
      <img width="341" alt="view_mob" src="https://github.com/jypark38/wanted-todolist/assets/126536351/cde0b4b2-8ce3-460d-96c2-2c140562e5e7">
    </td>
  </tr>
</table>

### 완료

<table>
  <tr>
    <td>
<img src='https://github.com/jypark38/wanted-todolist/assets/126536351/7306b231-23d7-4d07-954b-af7daf2526eb'>
    </td>
  </tr>
</table>

### 필터

<table>
  <tr>
    <td>
<img src='https://github.com/jypark38/wanted-todolist/assets/126536351/c30d6725-81ee-491f-a710-6c5e94ebeadf'>
    </td>
  </tr>
</table>

<br>

---

<br>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
