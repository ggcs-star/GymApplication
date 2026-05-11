import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BadgeIcon from '../../assets/images/trophy.svg';
import LikeIcon from '../../assets/images/like.svg';
import CommentIcon from '../../assets/images/comment.svg';
import ShareIcon from '../../assets/images/send.svg';

const FeedCard = ({
  name,
  text,
  likes,
  comments,
  image,
  time,
  shares,
  postImage,
  badge,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: image }} style={styles.avatar} />

        <View style={styles.headerContent}>
          
          <View style={styles.topRow}>
            <Text style={styles.name}>{name}</Text>

            {badge && (
              <LinearGradient
                colors={['#2E7D32', '#66BB6A']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.badge}
              >
                <BadgeIcon width={12} height={12}  />
                <Text style={styles.badgeText}>{badge}</Text>
              </LinearGradient>
            )}
          </View>

        
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      <Text style={styles.post}>{text}</Text>
      {postImage && (
        <Image source={{ uri: postImage }} style={styles.postImage} />
      )}

      <View style={styles.footer}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={handleLike}>
            <LikeIcon
              width={24}
              height={24}
              fill={liked ? '#2E7D32' : 'none'}
              stroke={liked ? '#2E7D32' : '#333'}
            />
          </TouchableOpacity>

          <Text style={styles.count}>{likeCount}</Text>
        </View>

        <View style={styles.iconRow}>
          <CommentIcon width={24} height={24} />
          <Text style={styles.count}>{comments}</Text>
        </View>

        <View style={styles.iconRow}>
          <ShareIcon width={24} height={24} />
          <Text style={styles.count}>{shares}</Text>
        </View>
      </View>
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },

  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },

  time: {
    fontSize: 12,
    color: '#888',
  },

  post: {
    color: '#333',
    fontSize: 14,
  },

  footer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },

  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  count: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  postImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginTop: 10,
    resizeMode: 'cover',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },

  badgeText: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },

  headerContent: {
  flex: 1,
},

topRow: {
  flexDirection: 'row',
  justifyContent: 'space-between', 
  alignItems: 'center',
},
});


