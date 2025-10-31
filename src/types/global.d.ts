declare global {
  interface Window {
    api: {
      getMessage: () => Promise<string>;
    };
  }
}

export global {}