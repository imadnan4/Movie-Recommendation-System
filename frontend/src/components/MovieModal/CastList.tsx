import React from 'react';
import type { CastMember } from '../../types';

interface CastListProps {
  cast?: CastMember[];
}

export function CastList({ cast }: CastListProps) {
  if (!cast?.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Cast</h3>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {cast.map((member) => (
          <div 
            key={member.id}
            className="flex-shrink-0 w-24 text-center animate-fadeIn"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
              <img
                src={member.profile_path || 'https://via.placeholder.com/185x185'}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-medium text-sm">{member.name}</p>
            <p className="text-xs text-gray-400">{member.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
