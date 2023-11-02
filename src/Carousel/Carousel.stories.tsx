import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import image from "./assets/image.jfif";
import image2 from "./assets/image2.jfif";
import image3 from "./assets/image3.jfif";
import image4 from "./assets/image4.jfif";
import image5 from "./assets/image5.jfif";

const meta = {
  title: "Design System/components/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    images: [image, image2, image3, image4, image5],
    autoPlay: false,
    stopOnHover: true,
    showDots: true,
    showPrevNext: true,
    timer: 1000,
  },
};
