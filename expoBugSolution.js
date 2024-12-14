The solution involves a multi-pronged approach: 

1. **Verify Package Versions:**  Ensure that your `package.json` contains compatible versions of `expo` and `eas-cli`. Use `npm ls expo` or `yarn why expo` to check dependencies.
2. **Clean and Rebuild:**  Start by doing a complete project clean.  Delete the `node_modules` directory, run `npm cache clean --force` (or the yarn equivalent), then reinstall dependencies using `npm install` or `yarn install`.
3. **Check Native Module Configurations:** Thoroughly examine your native project directories (`android/` and `ios/`). Ensure that the native modules are properly linked, configured, and built.  Rebuild the native projects separately if necessary. This often involves making sure that native dependencies are correctly installed and linked to your main Expo project.
4. **Examine Build Logs:**  The build logs, even if vague, might hint at specific issues.  Pay close attention to any warnings or errors, and search for error codes or related terms online. 
5. **Update Expo CLI:** Make sure your Expo CLI is updated to the latest stable version. Run `expo upgrade`.
6. **Node.js Version:** Check your Node.js version.  Incompatible Node.js versions may cause unexpected behavior.  If your version is too old, consider upgrading.
7. **Start a new project:** In some cases, starting a new Expo project and migrating your code may solve deeply embedded issues within the project structure.  This helps rule out problematic configurations that may have crept in over time. 

Example code (Illustrative;  Actual code will depend on the specific issue):

```javascript
// expoBugSolution.js (Illustrative example of resolving native module linking issues)
// ... (Code showing how to properly link and configure a native module) ...
```