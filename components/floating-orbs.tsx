"use client"

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple orb - top left */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, rgba(192, 132, 252, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Pink orb - right side */}
      <div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full animate-float-delayed"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.35) 0%, rgba(244, 114, 182, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Blue orb - bottom left */}
      <div 
        className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.35) 0%, rgba(129, 140, 248, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Secondary purple orb - center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-float-delayed"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Pink orb - bottom right */}
      <div 
        className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, rgba(244, 114, 182, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  )
}
