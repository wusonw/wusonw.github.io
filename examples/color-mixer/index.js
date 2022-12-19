function blendColors(colorObjects) {
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ] : null;
    }
  
    function weightedAverage(values, weights) {
      const sum = values.reduce((acc, val, idx) => acc + val * weights[idx], 0);
      const totalWeight = weights.reduce((acc, val) => acc + val, 0);
      return sum / totalWeight;
    }
  
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
  
    const values = colorObjects.map(colorObject => hexToRgb(colorObject.color));
    const weights = colorObjects.map(colorObject => colorObject.weight);
    const r = weightedAverage(values.map(color => color[0]), weights);
    const g = weightedAverage(values.map(color => color[1]), weights);
    const b = weightedAverage(values.map(color => color[2]), weights);
    return rgbToHex(r, g, b);
  }
  