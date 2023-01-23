async function stop(ms = 2000, func: () => void) {
  setTimeout(() => {
    func;
  }, ms);
}

export default stop;
