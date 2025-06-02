import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { supabase } from '@/lib/supabase';

type ProfileType = {
  id: number;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  email_address: string;
  profile_image_path: string;
};

export default function ProfileContent() {
  const [profileData, setProfileData] = useState<ProfileType[]>([]);
  const [imageUrl, setImageUrl] = useState<string>(
    'https://via.placeholder.com/120',
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfileData();
  }, []);

  async function fetchProfileData() {
    setLoading(true);

    const { data, error } = await supabase.from('arice_profile').select('*');
    if (error) {
      console.error('Error fetching profile data:', error);
      setLoading(false);
      return;
    }

    if (data && data.length > 0) {
      setProfileData(data);
      const profile = data[0];
      console.log('Profile data:', profile);

      if (profile.profile_image_path) {
        const { data: publicUrlData } = supabase.storage
          .from('images')
          .getPublicUrl(profile.profile_image_path);

        console.log('Public URL Data:', publicUrlData);

        if (publicUrlData?.publicUrl) {
          setImageUrl(publicUrlData.publicUrl);
        } else {
          console.error('No public URL found for image.');
          setImageUrl('https://via.placeholder.com/120');
        }
      } else {
        console.log('No profile_image_path found in profile data.');
        setImageUrl('https://via.placeholder.com/120');
      }
    } else {
      console.log('No profile data found.');
      setImageUrl('https://via.placeholder.com/120');
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#22c55e" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.profile}>PROFILE</Text>
        <Image source={{ uri: imageUrl }} style={styles.profileImage} />
      </View>

      {profileData.length > 0 ? (
        <>
          <Text style={styles.nameText}>
            {profileData[0].first_name}{' '}
            {profileData[0].middle_name ? profileData[0].middle_name + ' ' : ''}
            {profileData[0].last_name}
          </Text>
          <Text style={styles.emailText}>{profileData[0].email_address}</Text>
        </>
      ) : (
        <Text style={styles.emailText}>No profile data available.</Text>
      )}

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 112,
    height: 112,
    borderRadius: 56,
    marginBottom: 12,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
  },
  emailText: {
    fontSize: 14,
    color: '#6b7280',
  },
  editButton: {
    marginTop: 12,
    paddingHorizontal: 30,
    paddingVertical: 8,
    backgroundColor: '#22c55e',
    borderRadius: 10,
  },
  editButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  profile: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
