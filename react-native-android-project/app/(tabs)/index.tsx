// SocietyApp.tsx
import HeaderHome from "@/components/HeaderHome";
import { PlusIconGr } from "@/components/icons";
import { PlusOverlayButton } from "@/components/PlusButtonOverlay";
import ScreenWrapper from "@/components/ScreenWrapper";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowUpRight } from "lucide-react-native";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/* ---------------------- Quick Action Item ---------------------- */
function QuickActionItem() {
  const localImages = [
    {
      name: "Gate Updates",
      image: require("../../assets/images/home_image51.png"),
      bgColor: "#FFF0E7",
    },
    {
      name: "Bills",
      image: require("../../assets/images/home_image52.png"),
      bgColor: "#FFF8E7",
    },
    {
      name: "Visit Pass",
      image: require("../../assets/images/home_image53.png"),
      bgColor: "#E9FFE7",
    },
    {
      name: "Business",
      image: require("../../assets/images/home_image54.png"),
      bgColor: "#B0632821",
    },
    {
      name: "Help",
      image: require("../../assets/images/home_image54.png"),
      bgColor: "#FFE7E7",
    },
  ];
  return (
    <>
      {localImages.map((data, index) => (
        <TouchableOpacity style={styles.quickActionItem} activeOpacity={0.7} key={index}>
          <View
            style={[
              styles.quickActionIconWrapper,
              { backgroundColor: data.bgColor },
            ]}
          >
            <Image source={data.image} />
          </View>
          <Text style={styles.quickActionLabel}>{data.name}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
}

/* ---------------------- Service Card ---------------------- */
function ServiceCard() {
  const localImages = [
    {
      name: "Staff",
      image: require("../../assets/images/image24.png"),
      bgColor: "#37B7FE1A",
    },
    {
      name: "Pre Approved",
      image: require("../../assets/images/image28.png"),
      bgColor: "#37B7FE1A",
    },
    {
      name: "Amenities",
      image: require("../../assets/images/image25.png"),
      bgColor: "#E7FFE8",
    },
    {
      name: "Security",
      image: require("../../assets/images/image29.png"),
      bgColor: "#E9E7FF",
    },
    {
      name: "Residents",
      image: require("../../assets/images/image26.png"),
      bgColor: "#E7FCFF",
    },
    {
      name: "Complaints",
      image: require("../../assets/images/image30.png"),
      bgColor: "#FFE7E7",
    },
    {
      name: "Shops",
      image: require("../../assets/images/image27.png"),
      bgColor: "#FFEEE7",
    },
    {
      name: "Bookings",
      image: require("../../assets/images/image31.png"),
      bgColor: "#E7F5FF",
    },
  ];
  return (
    <>
      {localImages.map((data, index) => (
        <TouchableOpacity
          style={styles.serviceCard}
          activeOpacity={0.7}
          key={index}
        >
          <View
            style={[
              styles.serviceIconWrapper,
              { backgroundColor: data.bgColor },
            ]}
          >
            <Image source={data.image} />
          </View>
          <Text style={styles.serviceLabel}>{data.name}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
}

/* ---------------------- Announcement Card ---------------------- */
type AnnouncementCardProps = {
  title: string;
  description: string;
  author: string;
  date: string;
};

function AnnouncementCard({
  title,
  description,
  author,
  date,
}: AnnouncementCardProps) {
  return (
    <View style={styles.announcementCard}>
      <View style={styles.announcementStripe} />
      <View style={styles.announcementContent}>
        <Text style={styles.announcementTitle}>{title}</Text>
        <Text
          style={styles.announcementDescription}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
        <View style={styles.announcementFooter}>
          <View style={styles.announcementAuthorWrapper}>
            <View style={styles.announcementAuthorAvatar}>
              <Image
                style={{ height: 20, width: 20, borderRadius: 100 }}
                source={require("../../assets/images/rohanMistry_Demo.jpg")}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.announcementAuthor}>{author}</Text>
          </View>
          <Text style={styles.announcementDate}>{date}</Text>
        </View>
      </View>
    </View>
  );
}

/* ---------------------- Shop Card ---------------------- */
type ShopCardProps = {
  name: string;
  imageUrl: string;
};

function ShopCard({ name, imageUrl }: ShopCardProps) {
  return (
    <TouchableOpacity style={styles.shopCard} activeOpacity={0.7}>
      <Image
        source={require("../../assets/images/shop_nearby_1.jpg")}
        style={styles.shopImage}
        resizeMode="cover"
      />
      <View style={styles.shopInfoRow}>
        <Text style={styles.shopName}>{name}</Text>
        <LinearGradient
          colors={["#34B0F5", "#034175"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.shopArrowWrapper}
        >
          <ArrowUpRight size={12} color="#fff" />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

/* ---------------------- Main Screen ---------------------- */
export default function SocietyApp() {
  return (
    <ScreenWrapper style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <LinearGradient
          colors={["#034175", "#2082C0", "#094E84"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerWrapper}
        >
          <HeaderHome />
        </LinearGradient>

        {/* Scrollable content */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Greeting */}
          <Text style={styles.greetingText}>Good Morning Vivek!</Text>
          
          {/* Quick Actions */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickActionsRow}
          >
            <QuickActionItem />
          </ScrollView>

          {/* Announcements Section */}
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionHeaderLeft}>
              <Text style={styles.sectionTitle}>Announcement</Text>
              <LinearGradient
                colors={["#34B0F5", "#034175"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 1 }}
                style={styles.badge}
              >
                <Text style={styles.badgeText}>2</Text>
              </LinearGradient>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <PlusIconGr />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.announcementsRow}
          >
            <AnnouncementCard
              title="Power outage Announcement"
              description="The Meteropolital Electricity Authority will temporarily cut off the power..."
              author="Rohan Mistry"
              date="21 Aug, 2025"
            />
            <AnnouncementCard
              title="Janmashtami Celebration"
              description="All residents are hereby informed that our society will be celebrating Shree ..."
              author="Rohan Mistry"
              date="21 Aug, 2025"
            />
          </ScrollView>

          {/* Services */}
          <Text style={styles.sectionTitleServices}>Services</Text>
          <View style={styles.servicesGrid}>
            <ServiceCard />
          </View>

          {/* Promo Banner */}
          <LinearGradient
            colors={["#34B0F5", "#034175"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.promoBanner}
          >
            <View style={styles.promoTextWrapper}>
              <Text style={styles.promoTitle}>
                Shock-proof solutions,
                {"\n"}
                delivered fast.
              </Text>
              <TouchableOpacity style={styles.promoButton} activeOpacity={0.7}>
                <Text style={styles.promoButtonText}>Contact Now</Text>
              </TouchableOpacity>
            </View>
            {/* Replace uri with your real asset */}
            <LinearGradient
              colors={["#fff", "#fff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.circleShadow}
            />
            <View style={styles.circleImageWrapper}>
              <Image
                source={require("../../assets/images/rounded-cicle-image.jpg")}
                style={styles.promoImage}
                resizeMode="cover"
              />
            </View>
          </LinearGradient>

          {/* Shops Near You */}
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Shops Near You</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.shopsRow}>
            <ShopCard
              name="Raghuvir Soda Shop"
              imageUrl="../../assets/images/shop_nearby_1.jpg"
            />
            <View style={{ width: 12 }} />
            <ShopCard
              name="Anjana Ice-cream shop"
              imageUrl="../../assets/images/shop_nearby_2.jpg"
            />
          </View>

          {/* Extra bottom space for FAB + Tab Bar */}
          {/* <View style={{ height: 80 }} /> */}
        </ScrollView>

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
          {/* <Plus size={28} color="#ffffff" /> */}
          <PlusOverlayButton />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------- Styles ---------------------- */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  headerWrapper: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 40,
    // borderBottomLeftRadius: 24,
    // borderBottomRightRadius: 24,
  },

  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2563eb",
    marginBottom: 16,
  },
  quickActionsRow: {
    paddingBottom: 16,
  },
  quickActionItem: {
    alignItems: "center",
    marginRight: 16,
    minWidth: 70,
  },
  quickActionIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  quickActionLabel: {
    fontSize: 12,
    color: "#374151",
    textAlign: "center",
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  sectionHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#ffffff",
  },
  gradientTextStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  announcementsRow: {
    paddingBottom: 16,
    display: "flex",
    flexWrap: "wrap",
  },
  announcementCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
    width: 260,
  },
  announcementStripe: {
    width: 4,
    backgroundColor: "#3b82f6",
  },
  announcementContent: {
    flex: 1,
    padding: 12,
  },
  announcementTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    flexShrink: 1,
    marginBottom: 4,
  },
  announcementDescription: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    color: "#6b7280",
    marginBottom: 4,
    flexShrink: 1,
  },
  announcementFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  announcementAuthorWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  announcementAuthorAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 4,
    display: "flex",
    gap: 10,
  },
  announcementAuthor: {
    fontSize: 12,
    lineHeight: 18,
    color: "#034175",
    fontWeight: "500",
  },
  announcementDate: {
    fontSize: 12,
    lineHeight: 18,
    color: "#d1d5db",
  },
  sectionTitleServices: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 12,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  serviceCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#f9fafb",
    width: "48%",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  serviceIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  serviceLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    fontFamily: 'Inter',
  },
  promoBanner: {
    flexDirection: "row",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
    height: 150,
    overflow: "hidden",
  },
  promoTextWrapper: {
    flex: 1,
    marginRight: 12,
  },
  promoTitle: {
    color: "#ffffff",
    fontSize: 22,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: "inter",
    marginBottom: 8,
  },
  circleImageWrapper: {
    position: "absolute",
    right: -10,
    bottom: -23,
    width: 120,
    height: 120,
    borderRadius: 95,
    overflow: "hidden",
    backgroundColor: "white",
    // shadow for iOS
    shadowColor: "#00000080",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    // shadow for Android
    elevation: 8,
  },
  circleShadow: {
    position: "absolute",
    right: -20,
    bottom: -32,
    width: 145,
    height: 145,
    borderRadius: 115,
    backgroundColor: "#4FC3F7",
    opacity: 0.15,
  },
  promoButton: {
    backgroundColor: "#37B7FE57",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    lineHeight: 34,
    alignSelf: "flex-start",
  },
  promoButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  promoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#37B7FE",
  },
  shopsRow: {
    flexDirection: "row",
    marginBottom: 32,
  },
  shopCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
  },
  shopImage: {
    width: "100%",
    height: 131,
  },
  shopInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  shopName: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
    color: "#000",
    marginRight: 8,
  },
  shopArrowWrapper: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#eff6ff",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    // backgroundColor: "#3b82f6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#3b82f6",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
});
