"use client";

import OrbitFlipSlider from "@/components/ui/orbit-flip-slider";

export default function OrbitFlipSliderDemo() {
  return (
    <div className="w-full">
      <OrbitFlipSlider
        backgroundColor="#e9e9ea"
        imageWidth={90}
        imageHeight={140}
        imageGap={0}
        rounded="rounded-none"
        enableHoverMovement
        hoverMoveY={-8}
        perspectiveRotateValue={180}
        perspectiveRotateDirection="right"
        rotate
        rotateSpeed={4}
        stopRotationOnHover
        flatRadiusX={1.6}
        flatRadiusY={1.2}
        flatScale={1}
        ringRotateX={31}
        ringRotateY={56}
        ringRotateZ={-25}
        ringRadiusX={1.5}
        ringRadiusY={1.2}
        ringScale={1}
        tiltRotateX={70}
        tiltRotateY={0}
        tiltRotateZ={0}
        tiltRadiusX={1.9}
        tiltRadiusY={1.5}
        tiltScale={1.2}
        tiltMoveY={300}
        galleryRotateX={0}
        galleryRotateY={0}
        galleryRotateZ={0}
        galleryRadiusX={1.3}
        galleryRadiusY={1.5}
        galleryScale={1.2}
      />
    </div>
  );
}
