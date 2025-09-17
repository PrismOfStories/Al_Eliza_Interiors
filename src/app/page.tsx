export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover "
          src="https://res.cloudinary.com/dxhmpdgqj/video/upload/v1753375133/intro_ofgrvv.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
