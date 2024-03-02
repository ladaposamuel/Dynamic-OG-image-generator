import { describe, it, expect } from "jest";
import ImageService from "../services/imageService";

describe("ImageService", () => {
  it("should generate an image", async () => {
    const result = await ImageService.generateImage(/* mock request */);
    expect(result).toBeInstanceOf(Buffer);
  });
});
