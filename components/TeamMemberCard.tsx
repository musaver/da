'use client';

import Image from 'next/image';

interface TeamMemberCardProps {
  img: string;
  name: string;
  role: string;
  idx: number;
}

export default function TeamMemberCard({ img, name, role, idx }: TeamMemberCardProps) {
  return (
    <div className="col-sm-6 col-lg-3 mb-11 mb-lg-0">
      <div className="team d-flex flex-column align-items-center gap-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}
        data-aos-duration="1000">
        <div 
          className="team-img" 
          style={{ 
            width: '100%', 
            height: '270px', 
            overflow: 'hidden', 
            position: 'relative', 
            borderRadius: '30px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
          }}
        >
          <Image 
            src={`/assets/images/team/${img}`} 
            alt="team" 
            className="img-fluid" 
            width={300} 
            height={300}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'top center',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }} 
          />
        </div>
        <div className="team-details text-center d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-1">
            <h6 className="mb-0">{name}</h6>
            <p className="mb-0">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

